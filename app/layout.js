
import './globals.css'; 
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <main className="flex-grow md:p-5 my-3 mx-1 md:my-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
