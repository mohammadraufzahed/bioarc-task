const modules = import.meta.glob("/src/assets/icons/*.svg", {
  eager: true,
  import: "default",
  query: {
    react: "",
  },
});

export const Icons = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const filename = path.split("/").pop()!.replace(".svg", "");
    const pascal = filename
      .split(/[_-]/)
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join("");
    return [pascal, mod];
  })
) as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;
