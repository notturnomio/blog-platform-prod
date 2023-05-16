type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [cls, ...Object.keys(mods).filter((key) => mods[key]), ...additional.filter(Boolean)]
    .join(' ')
    .replace('  ', ' ');
}

classNames('remove-btn', { hovered: true, selectable: true, red: false }, ['pdg']);
