import Header from '~/components/Layouts/PartialLayout/Header'; // goi header ra
import Sidebar from './Sidebar'; // goi sidebar ra
import Footer from './Footer'; // goi footer ra
function DefaultLayout({Children}) { // main Layout, children la thg do~ ra luon thay doi, la body
    return (
        <div>
            <Header />  {/* cai nay hien thi header  giong voi {{>header}}*/}
            <div class="container">
                <Sidebar />   {/* cai nay hien thi Sidebar  giong voi {{>sidebar }} nav trai*/}
                <div class="content">
                    {Children}   {/* cai nay hien thi Body  giong voi {{{body}}}*/}
                </div>
            </div>
            <Footer />  {/* cai nay hien thi footer  giong voi {{>footer}}*/}
        </div>
    );
}

export default DefaultLayout;