import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';

const currentUser = true;

function App() {
    return (
        <div className="root">
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        if (!currentUser && route.path === '/') {
                            const Page = route.component;
                            return <Route key={index} path={route.path} element={<Page />} />;
                        }
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
