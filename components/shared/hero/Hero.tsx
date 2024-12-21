'use client';
import { title, subtitle } from "@/components/primitives";
import clsx from "clsx";
import { motion } from "framer-motion";

import styles from "./styles.module.css";

export default function Hero() {
  return (
    <>
      <section className={clsx("section", styles["hero-section"])}>
        <motion.div animate={{ opacity: 1, transform: "translateY(0)" }} initial={{ opacity: 0, transform: "translateY(120px)" }} transition={{ duration: .7 }} className="container inline-block max-w-xl text-center justify-center">
          <h1>
            <span className={title()}>Make&nbsp;</span>
            <span className={title({ color: "violet" })}>your&nbsp;</span>
            <br />
            <span className={title()}>eCommerce.</span>
          </h1>
          <motion.p initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className={subtitle({ class: "mt-4" })}>
            Everything you need to have a great shop.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}