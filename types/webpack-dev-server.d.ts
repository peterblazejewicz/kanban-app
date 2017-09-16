/**
 * Redeclare missing types for modules merging
 */
import * as wds from 'webpack-dev-server';
declare module 'webpack-dev-server' {
  export interface Configuration {
    host?: string;
    inline?: boolean;
    // overlay?: boolean | object;
    port?: number;
  }
}