import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { createElement, type CSSProperties, type ReactNode } from "react";

type Tag = "div" | "li" | "article" | "section";

type FadeInProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  /** Element to render, so list items can animate without breaking list semantics. */
  as?: Tag;
  /** Seconds to wait before the animation starts. */
  delay?: number;
  /** Vertical offset in px the element travels from. */
  y?: number;
  /** Animate on mount instead of when scrolled into view. */
  immediate?: boolean;
};

/**
 * Fade-and-rise reveal that respects the user's reduced-motion setting.
 * Replaces the hand-written framer-motion blocks previously copied into every section.
 */
export function FadeIn({ children, as = "div", delay = 0, y = 16, immediate = false, ...rest }: FadeInProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    const { className, style } = rest;
    return createElement(as, { className, style: style as CSSProperties }, children);
  }
  const Component = motion[as] as typeof motion.div;
  const visible = { opacity: 1, y: 0 };
  return (
    <Component
      initial={{ opacity: 0, y }}
      {...(immediate
        ? { animate: visible }
        : { whileInView: visible, viewport: { once: true, margin: "-60px" } })}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}
