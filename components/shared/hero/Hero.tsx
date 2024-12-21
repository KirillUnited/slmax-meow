"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

import styles from "./hero.module.css";

import { title, subtitle } from "@/components/primitives";

export default function Hero() {
  return (
    <>
      <section className={clsx("section", styles["section"])}>
        <motion.div
          animate={{ opacity: 1, transform: "translateY(0)" }}
          className="container"
          initial={{ opacity: 0, transform: "translateY(120px)" }}
          transition={{ duration: 0.7 }}
        >
          <div className={clsx(styles["section-content"])}>
            <h1>
              <span className={title()}>Make&nbsp;</span>
              <span className={title({ color: "violet" })}>your&nbsp;</span>
              <br />
              <span className={title()}>eCommerce.</span>
            </h1>
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className={subtitle({ class: "mt-4" })}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1.5 }}
            >
              Everything you need to have a great shop.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
