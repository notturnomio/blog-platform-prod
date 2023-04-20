export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
};

export type BuildMode = "production" | "development";

export interface buildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
}
