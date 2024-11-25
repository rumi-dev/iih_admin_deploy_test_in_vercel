"use client";
import React, { useState } from "react";
import { Collapse, Nav, Tab, Accordion } from "react-bootstrap";
import logo from "@/assets/iih images/logo/iih-logo.jpg";
import Image from "next/image";
import { Link1 } from "../commonComponents/texts/links";

const SideNavbar = () => {
    const homePage = [
        { route: "/homepage/welcome_content", text: "Banner Content" },
        { route: "/homepage/welcome_content_2", text: "Welcome Content 2" },
        { route: "/homepage/why_choose_us", text: "Why Choose Us" },
        { route: "/homepage/testimonials", text: "Testimonials" },
        { route: "/homepage/social_media_links", text: "Social Media Links" },
    ];
    const coursesList = [
        { route: "/homepage/welcome_content", text: "Banner Content" },

    ];
    return (
        <>
            <div className=" vh-100 border-end ">
                <Tab.Container>
                    <Nav className="flex-column align-items-center">
                        <Image
                            alt="logo"
                            width={250}
                            height={250}
                            src={logo}
                            style={{ height: "100px", width: "100px" }}
                        />
                        <Accordion defaultActiveKey={[]} alwaysOpen className="w-100  ">
                            <div className="flex flex-col">
                                <Link1 route={"/dashboard"} text={"Dashboard"} />
                            </div>

                            <Accordion.Item eventKey="0" className="">
                                <div className="">
                                    <Accordion.Header className="">Home Page </Accordion.Header>
                                </div>
                                <Accordion.Body className="flex flex-col">
                                    {homePage.map((item, index) => (
                                        <Link1 route={item.route} text={item.text} key={index} />
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>About us</Accordion.Header>

                                <Accordion.Body className="">
                                    <Link1
                                        route={"/vision&mission"}
                                        text={"Vision and Mission"}
                                    />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className="">
                                <div className="">
                                    <Accordion.Header className="">Courses </Accordion.Header>
                                </div>
                                <Accordion.Body className="flex flex-col">
                                    {/* {homePage.map((item, index) => (
                                        <Link1 route={item.route} text={item.text} key={index} />
                                    ))} */}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Nav>
                </Tab.Container>
            </div>
        </>
    );
};

export default SideNavbar;
