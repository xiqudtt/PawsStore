import React from 'react';
import './breadcrumbs.css';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ title }) => {
  return (
    <div className="breadcrumbs">
        <div className="container">
            <nav className="breadcrumbs__menu">
                <ol className="breadcrumbs__menu-list">
                    <li className="breadcrumbs__menu-item">
                        <Link to="/" className="breadcrumbs__menu-link">Home</Link>
                        <svg className="breadcrumbs__menu-arrow lucide lucide-chevron-right w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                    </li>
                    <li className="breadcrumbs__menu-item">
                        <Link to="/"  className="breadcrumbs__menu-link">Travel & Carriers</Link>
                        <svg className="breadcrumbs__menu-arrow lucide lucide-chevron-right w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                    </li>
                    <li className="breadcrumbs__menu-item">
                        <span className="breadcrumbs__menu-link">{title}</span>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
  )
}

export default Breadcrumbs;