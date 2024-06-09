const Footer = () => {
  return (
    <div className="footer sticky bottom-0 w-full">
      <footer className="bg-secondary text-white py-4">
        <div className="container mx-auto text-center">
          <div className="text-accent">
            &copy; Crafted by{" "}
            <a href="https://github.com/arodidev" target="_blank">
              <span className="text-primary">Jamie Arodi.</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
