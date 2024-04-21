import Header from '~/components/Layouts/PartialLayout/Header'; // goi header ra
import Sidebar from './Sidebar'; // goi sidebar ra
import Footer from './Footer'; // goi footer ra
import tailwind from '~/components/GlobalStyles/css/tailwind.css'; // goi tailwind
// const cx = classNames.bind(tailwind);
function    DefaultLayout({children}) { // main Layout, children la thg do~ ra luon thay doi, la body
    return (
        <div class="container-body w-full">
            <div class="w-full h-screen flex">
                <div class=" w-1/12 min-w-32 relative">
                    <div class="pl-6">
                        <Sidebar></Sidebar>   {/* cai nay hien thi Sidebar  giong voi {{>sidebar }} nav trai*/}
                    </div>
                </div>
                <div class="w-10/12 relative flex flex-col" id="render-body">
                <header>
                    <Header />  {/* cai nay hien thi header  giong voi {{>header}}*/}
                </header>
                <div class=" flex-1  flex flex-col items-center">
                    <div class="flex justify-center w-full relative px-12 mt-32">
                        {children}   {/* cai nay hien thi Body  giong voi {{{body}}}*/}
                    </div>
                </div>
                <footer>
                        <Footer />  {/* cai nay hien thi footer  giong voi {{>footer}}*/}
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;