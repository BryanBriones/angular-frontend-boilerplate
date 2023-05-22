import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showOverlay:boolean=false;
  educationAttainment:any= [
    {
      university:"Mapua Institute of Technology-Makati ", degree:"Bachelor of Science  Information Technology", yearsAttended:"2010-2013", distinction:"Latin Honors: Cum Laude, Gold Medalist"
    }
  ]
  professionalExperience:any= [
    {
      role:"Full Stack Developer (Angular/NodeJS/Serverless Framework)",
      company: "TAS Tradesoft Inc.",
      project:"Syngenx and Vital Edge Analytics",
      roleDesc: `Develops frontend and backend for the Syngenx and Vital Edge App in a serverless framework (AWS) that captures and analyzes web visitors and customers of our Clients using our cutting edge Pixel technology so that we 
      can retarget, remarket and funnel sales depending on the customer's preferences and data. We also integrated with 
      Stripe, Wordpress, Hubspot, Klaviyo, Google Ads, Google Spreadsheets and other third-party web apps for more 
      streamlined processes from Billing, Data collection/analysis and Reporting`,
      yearsAttended: "May 2021- Current"
    },
    {
      role:"Freelance Web/Mobile Developer",
      company: "Freelance",
      project:"Cainta Municipal Mobile App for Android and Apple",
      roleDesc: `Develops end to end framework, architecture and application for Web and Mobile apps depending on client’s
      needs. Handles Front-end and backend development, database, storage until app deployment using cloud platform
      technologies (PAAS: Azure and AWS)`,
      yearsAttended: "November 2020 - May 2021"
    },
    {
      role:"Web Developer",
      company: "Willis Towers Watson",
      project:"Shared Delivery Team (SDT)",
      roleDesc: `Develops custom code enhancements and features of WTW’s proprietary web app for different corporate clients
      of WTW depending on their specification under Health business segment. SDT also handles web development for
      WTW’s internal tools used by colleagues such as time tracker tool, managers reporting tool, automated access
      request tool and etc.`,
      yearsAttended: "September 2018 - November 2020"
    },
    {
      role:"Software Tools and Web Developer",
      company: "Fluor PH",
      project:"Projects and Controls Estimating Department",
      roleDesc: `Handles end-to-end software web lifecycle from development to maintenance of the Global Estimating Data
      Standardization web application which Estimators use for their construction projects.`,
      yearsAttended: "July 2017 – September 2018"
    },
    {
      role:"Application Development Analyst ",
      company: "Accenture Inc",
      project:"Bill and Melinda Gates Foundation",
      roleDesc: `Ensures code build quality, performs tests, and catches software code functionality bugs of
      the Foundation’s different back-end datawarehouses systems.`,
      yearsAttended: "August 2016 – July 2017"
    },
    {
      role:"Software Engineer",
      company: "Accenture Inc",
      project:"Microsoft Avanade Capability & Retail Production - Ross AM",
      roleDesc: `Took charge of planning, creating and theorizing detailed technical concepts until implementation for
      “IT- Hardening - Employee Imports Job Error Automation” (first WFM project automation), which is a
      major process change for our Ross WFM, from start to completion using Agile Process`,
      yearsAttended: "May 2015 – August 2016"
    },
    {
      role:"Associate Software Engineer",
      company: "Accenture Inc",
      project:"Application Management – Workforce Management (WFM)",
      roleDesc: `Handles the deployment & management of the workforce application of 1300+ Ross Retail Stores.Responsible for resolving technical tickets, address daily employee import errors, provide different
      informational & statistical reports for the business, and ensure completion of internal and import
      jobs`,
      yearsAttended: "December 2013 – May 2015"
    },
  ]
  constructor() {}

  async ngOnInit() {
    this.showOverlay=false;
   }

   
  refreshDashboardData(){
  }

  ngOnDestroy(){}

}
