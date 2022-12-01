import { Header } from './Header';
import { Sidebar } from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className="container">
            <Header />
            <div className="body">
                {children}
                <Sidebar />
            </div>
        </div>
    );
}

export default DefaultLayout;
