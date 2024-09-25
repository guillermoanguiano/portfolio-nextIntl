import { navItems } from "@/data";

const Header = () => {
  return (
    <header
      className="w-full flex items-center justify-center"
    >
      <div className="flex gap-5 p-5">
        {navItems.map((item, index) => (
          <a
            href={item.link}
            className="text-white hover:text-lime-500 font-medium transition"
            key={index}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export { Header };
