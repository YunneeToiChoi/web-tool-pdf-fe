import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
function DefalutLayout({Children}) {
    return (
        <div>
            <Header />
            <div class="container">
                <Sidebar />
                <div class="content">
                    {Children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefalutLayout;