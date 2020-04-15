import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from "styled-components";


function CustomChatbot(props) {
    const config = {
        width: "300px",
        height: "400px",
        floating: true
      };

      const theme = {
        background: "beige",
        fontFamily: "Arial, Helvetica, sans-serif",
        headerBgColor: "darkred",
        headerFontColor: "#fff",
        headerFontSize: "25px",
        botBubbleColor: "darkred",
        botFontColor: "#fff",
        userBubbleColor: "#fff",
        userFontColor: "#4c4c4c"
       };

    const steps = [
        {
         id: "Welcome message",
         message: "Hello, welcome to Piazeta!",
         trigger: "How can I help1"
        },

        {
         id: "How can I help1",
         message: "I am here for you if you need my help!",
         trigger: "Ask Name"
        },

        {
        id: "Ask Name",
        message: "Before starting, let me know your name:",
        trigger: "Waiting user input for name"
        },

        {
        id: "Waiting user input for name",
        user: true,
        trigger: "Asking options to eat",
        },

        {
        id: "Asking options to eat",
        message: "Hi {previousValue}, glad to have you here with me!",
        trigger:"How can I help"
        },

        {
        id: "How can I help",
        message: "Where do you need help?",
        trigger: "Help options"
        },

        {
        id: "Help options",
        options: [
            {
                value: "Products",
                label: "Products",
                trigger: "ProductsHelp"
            },
            { 
                value: "Orders",
                label: "Orders",
                trigger: "OrdersHelp"
            },
            { 
                value: "Other",
                label: "Other",
                trigger: "OtherHelp"
            } 
                ]
           },

           {
               id:"ProductsHelp",
               message:"Sure, check if you find your question below:",
               trigger:"ProductsOptions"
           },

           {
                id:"OrdersHelp",
                message:"Sure, check if you find your question below:",
                trigger:"OrdersHelpOptions"
            },

            {
                id:"OtherHelp",
                message:"Sure",
                trigger: "Contact us"
           
            },

            {
                id:"Contact us",
                message:"If you didn't find your question above, you can contact us personally on contact@piazeta.com!",
                trigger:"Final message",
            },

            {   id:"Final message",
                message:"Have a great day! Don't worry, your problem will be solved",
                end: true

            },

            {
                id:"ProductsOptions",
                options: [
                    {
                        value: "Question1products",
                        label: "Are the uploaded products verified?",
                        trigger: "Question1productsAnswer"
                    },
                    { 
                        value: "Question2products",
                        label: "Is there a maximum number of products I can upload on the market?",
                        trigger: "Question2productsAnswer"
                    },
                    { 
                        value: "Question3products",
                        label: "How long will my product be displayed on the market?",
                        trigger: "Question3productsAnswer"
                    },
                    { 
                        value: "Question4products",
                        label: "How can i see more details about a product?",
                        trigger: "Question4productsAnswer"
                    } 
                        ]
            },
            {
                id:"Question1productsAnswer",
                message:"Yes, the products are verified by our staff everyday to make sure our policies are always respected",
                trigger:"Other question"
            },
            {
                id:"Question2productsAnswer",
                message:"No, you can upload as many products as you wish. However, if you have more pieces of the same product you can mention that in the quantity field ",
                trigger:"Other question"
            },
            {
                id:"Question3productsAnswer",
                message:"They will be displayed until they are sold or you choose to remove them from the market from the item's page",
                trigger:"Other question"
            },
            {
                id:"Question4productsAnswer",
                message:"You can see more details about a product by simply clicking on it. If it is your product, there are several options if you want to modify it.",
                trigger:"Other question"
            },
            {
                id:"Other question",
                message:"May I help you with anything else?",
                trigger:"Other question options"
            },
            {
                id:"Other question options",
                options:[
                    {
                        value: true,
                        label: "Yes",
                        trigger:"Help options"
                    },
                  {
                      value:"false",
                      label:"No",
                      trigger:"FinalProblemSolved"
                  }
                ]
            },
            {
                id:"FinalProblemSolved",
                message:"Have a great day! Can't wait to see you back on Piazeta!",
                end:true
            },
            {
                id:"OrdersHelpOptions",
                options: [
                    {
                        value: "Question1orders",
                        label: "How will be my order shipped?",
                        trigger: "Question1ordersAnswer"
                    },
                    { 
                        value: "Question2orders",
                        label: "Are the sellers verified?",
                        trigger: "Question2ordersAnswer"
                    },
                    { 
                        value: "Question3orders",
                        label: "What happens if the seller doesen't respond to my messages?",
                        trigger: "Question3ordersAnswer"
                    },
                   
                        ]
            },
            {
                id: "Question1ordersAnswer",
                message:"After finalizing the order in your cart both you and the seller will receive each other's contact informations. You can choose any method with him considering the distance, the quantity or the weight of the order.",
                trigger:"Other question"

            },
            {
                id: "Question2ordersAnswer",
                message:"Initially, we can't verify their identity, but any negative report will be considered and we can remove them from Piazeta.",
                trigger:"Other question"

            },
            {
                id: "Question3ordersAnswer",
                message:"Our main goal is to link the customers with the sellers and after this point you can choose any communication method. If this happens, please contact us and we will try to facilitate the conversation with the seller.",
                trigger:"Other question"

            }



      ];
    return (
        <ThemeProvider theme={theme}>
            <div className="chatbot">
                <ChatBot steps={steps} {...config} />;
            </div>
        </ThemeProvider>)
  }
  export default CustomChatbot;