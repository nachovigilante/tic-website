import type { NextComponentType, NextPage, NextPageContext } from "next";
import type { AppProps } from "next/app";
import type { LayoutKeys } from "./layouts/Layouts";

export type MyPage<P = object, IP = P> = NextPage<P, IP> & {
  Layout?: LayoutKeys;
};

export type MyAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    Layout: LayoutKeys;
  };
};

// no entiendo que hace este archivo