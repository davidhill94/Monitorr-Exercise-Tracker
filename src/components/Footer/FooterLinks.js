import React from 'react';
import { Link } from 'react-router-dom';

export const FooterLinks = () => {

    const goToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <div className="w-full flex flex-row justify-evenly items-center py-4">
            <div className="p-2">
                <h5 className="font-bold">Monitorr</h5>
                <ul onClick={goToTop}>
                    <li>
                        <Link onClick={goToTop} to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link onClick={goToTop} to="/statistics">Statistics</Link>
                    </li>
                    <li>
                        <Link onClick={goToTop} to="/about">About Mrr</Link>
                    </li>
                </ul>
            </div>
            <div className="p-2">
                <h5 className="font-bold">Database</h5>
                <ul>
                    <li>
                        <Link onClick={goToTop} to="/user">Add Users</Link>
                    </li>
                    <li>
                        <Link onClick={goToTop} to="/user">Add Activities</Link>
                    </li>
                    <li>
                        <Link onClick={goToTop} to="/create">Add Exercise</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
