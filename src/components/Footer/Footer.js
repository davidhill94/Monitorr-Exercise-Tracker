import React from 'react';
import { FooterLinks } from './FooterLinks';
import mrr from '../../images/Mrr_wrapped.png';

export const Footer = () => {
  return (
    <div className="w-full h-fit bg-secondary flex flex-col items-center justify-center relative py-4">
        <FooterLinks />
        <img 
        src={mrr} 
        alt="logo" 
        className="w-24 h-auto py-2"/>
        <p>Copyright © 2023 Monitorr Exercise Tracker</p>
    </div>
  )
}
