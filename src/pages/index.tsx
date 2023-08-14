import React, { useEffect, useCallback, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import { CountUp } from "use-count-up";

import styles from "./index.module.css";
// import "../reset.css";

function useTotalNames(): number | undefined {
  const [total, setTotal] = useState(undefined);

  const fetchTotal = useCallback(async () => {
    const url = "https://api.bns.xyz/bns/total-names";
    const res = await fetch(url);
    const data = (await res.json()) as { total: number };
    setTotal(data.total);
  });

  useEffect(() => {
    void fetchTotal();
  }, []);

  return total;
}

function HomepageHeader() {
  const total = useTotalNames();

  return (
    <div className="flex flex-col h-full grow min-h-[600px] bg-[var(--ifm-background-color)] relative home-bg">
      <div className="grow flex flex-col gap-20 container sm:items-center h-full">
        <div className="grow"></div>
        <div className="w-full flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 h-full">
            <h1 className="text-8xl font-bold text-[var(--ifm-font-color-base)">
              BNS Hub
            </h1>
            <p className="text-3xl py-6 text-[var(--ifm-font-color-base)">
              Documentation for the Bitcoin Name System
            </p>
          </div>
          <div className="w-full sm:w-1/2 sm:px-20 flex flex-col gap-3 sm:items-end items-start">
            <p className="text-2xl text-[var(--ifm-font-color-base)">
              {total ? (
                <CountUp
                  isCounting={true}
                  start={290000}
                  end={total}
                  duration={2}
                  thousandsSeparator=","
                  easing={"easeOutCubic"}
                />
              ) : (
                "..."
              )}{" "}
              names and counting
            </p>
            <p>
              <a
                className="text-[var(--ifm-navbar-link-color)] underline underline-offset-2 text-lg"
                href="/docs/intro"
              >
                Learn about BNS
              </a>
            </p>
            <p>
              <a
                className="text-[var(--ifm-navbar-link-color)] underline underline-offset-2 text-lg"
                href="/docs/ecosystem"
              >
                Explore the BNS ecosystem
              </a>
            </p>
          </div>
        </div>
        <div className="grow"></div>
      </div>
    </div>
  );
}

export function HomeRedirect(): JSX.Element {
  useEffect(() => {
    window.location.href = "/docs/intro";
  }, []);
  return null;
}

export default function Home(): JSX.Element {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="h-12 w-full bg-[var(--ifm-navbar-background-color)] border-b-sla">
        <div className="flex flex-row justify-between h-11 container items-center">
          <div className="flex flex-row gap-8 h-full items-center">
            {/* <div> */}
            <a
              href="/"
              className="text-2xl font-bold text-[var(--ifm-navbar-link-color)]"
            >
              BNS Hub
            </a>
            <a
              href="/docs/intro"
              className="text-md text-[var(--ifm-navbar-link-color)]"
            >
              Docs
            </a>
            {/* </div> */}
          </div>
        </div>
      </div>
      <HomepageHeader />
    </div>
  );
  // return (
  //   <Layout title={`BNS`} description="The Bitcoin Name System">
  //     <HomepageHeader />
  //     {/* <main>
  //       <HomepageFeatures />
  //     </main> */}
  //   </Layout>
  // );
}
