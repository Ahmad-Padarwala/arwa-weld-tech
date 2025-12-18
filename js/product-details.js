// Product Details JSON
// ================= READ PRODUCT ID FROM URL =================
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// ================= PRODUCT DETAILS JSON DATA =================
const products = {

    /* ================= ARC SERIES ================= */

    ARC_200_IGOLD: {
        heroTitle: "ARC WELDING MACHINE",
        heroDesc: "An ARC welding machine uses an electric arc between an electrode and the workpiece to generate heat and join metals. It is widely used in fabrication, construction, and industrial repair for its strong welds, simplicity, and reliability.",
        heroImage: "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold.webp",
        title: "ARC 200 IGOLD – Single-Phase ARC Welding Machine",
        sku: "ARC200IG",
        rating: 4.6,
        shortDesc: "The ARC 200 IGOLD is single-phase MMA welding machine designed for professionals seeking top-tier welding performance. It features gold-series inverter technology optimized for energy efficiency, arc stability, and reduced spatter.",
        longDesc1: "Ideal for workshop and onsite fabrication, it supports electrodes up to 3.15mm with strong penetration and clean weld finish. The compact yet durable design ensures easy mobility without compromising power.",
        longDesc2: "Built with intelligent protection systems, it maintains stable operation even during voltage fluctuations, making it a reliable everyday welding solution for fabricators and technicians and regular household welding.",
        images: [
            "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold.webp",
            "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold-left.webp",
            "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold-front.webp",
            "./images/top-range/arc-series/single-phase/arc-200-igold/arc-200-igold-back.webp",
        ],

        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    ARC_250_IGOLD: {
        heroTitle: "ARC WELDING MACHINE",
        heroDesc: "An ARC welding machine uses an electric arc between an electrode and the workpiece to generate heat and join metals. It is widely used in fabrication, construction, and industrial repair for its strong welds, simplicity, and reliability.",
        heroImage: "./images/top-range/arc-series/single-phase/arc-250-igold/arc-250-igold.webp",
        title: "ARC 250 IGOLD – SINGLE PHASE 250A ARC WELDING MACHINE",
        sku: "ARC250IG",
        rating: 4.7,
        shortDesc: "The ARC 250 IGOLD is engineered for industrial users who demand powerful performance, reliability, and premium build quality. With enhanced IGBT technology, it delivers strong, stable arc output suitable for welding mild steel, stainless steel, and general fabrication materials.",
        longDesc1: "The machine’s improved gold-series components ensure excellent efficiency, deep penetration, and reduced spatter. Supporting up to 3.15mm electrodes, it is widely used in fabrication workshops, repair units, and industrial maintenance operations.",
        longDesc2: "Its intelligent safety features and rugged casing make it a long-lasting investment for professionals.",
        images: [
            "./images/top-range/arc-series/single-phase/arc-250-igold/arc-250-igold.webp",
            "./images/top-range/arc-series/single-phase/arc-250-igold/arc-250-igold-left.webp",
            "./images/top-range/arc-series/single-phase/arc-250-igold/arc-250-igold-front.webp"
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    ARC_250_IJ_S: {
        heroTitle: "ARC WELDING MACHINE",
        heroDesc: "An ARC welding machine uses an electric arc between an electrode and the workpiece to generate heat and join metals. It is widely used in fabrication, construction, and industrial repair for its strong welds, simplicity, and reliability.",
        heroImage: "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs.webp",
        title: "ARC 250 IJ-S – PREMIUM SINGLE-PHASE 250A ARC WELDING MACHINE",
        sku: "ARC250IJS",
        rating: 4.5,
        shortDesc: "The ARC 250 IJ-S is a professional-grade machine designed for demanding welding applications requiring consistent performance. Its IGBT inverter technology delivers smooth and stable arc behavior for precise, clean welds with minimal spatter.",
        longDesc1: "This model supports heavy usage with 2.5mm and 3.15mm electrodes when needed, making it ideal for fabrication units and industrial maintenance tasks. Built with overheating and overload protection, it ensures long operational life and safe usage.",
        longDesc2: "The compact size combined with industrial-strength performance makes the ARC 250 IJ-S a top pick for workshops and contractors.",
        images: [
            "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs.webp",
            "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs-left.webp",
            "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs-front.webp",
            "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs-back.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    ARC_300_IJ_S: {
        heroTitle: "ARC WELDING MACHINE",
        heroDesc:  "An ARC welding machine uses an electric arc between an electrode and the workpiece to generate heat and join metals. It is widely used in fabrication, construction, and industrial repair for its strong welds, simplicity, and reliability.",
        heroImage: "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs.webp",
        title: "ARC 300 IJ-S – High-Efficiency 300A Single-Phase ARC Welding Machine",
        sku: "ARC300IJS",
        rating: 4.8,
        shortDesc: "The ARC 300 IJ-S delivers high power and top-tier welding stability, offering a 20–300A current range suited for heavy-duty welding tasks. With advanced IGBT industrial technology, it ensures optimal arc force, reduced spatter, and deeper weld penetration.",
        longDesc1: "This model supports continuous welding with 3.15mm electrodes and can handle 4.0mm electrodes when needed, making it ideal for structural fabrication, machinery repair, and industrial operations.",
        longDesc2: "Despite its power, the machine remains portable and energy-efficient, ensuring smooth performance even in challenging conditions.",
        images: [
            "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs.webp",
            "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs-left.webp",
            "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs-front.webp",
            "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs-back.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    ARC_200_ST: {
        heroTitle: "ARC WELDING MACHINE",
        heroDesc: "An ARC welding machine uses an electric arc between an electrode and the workpiece to generate heat and join metals. It is widely used in fabrication, construction, and industrial repair for its strong welds, simplicity, and reliability.",
        heroImage: "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st.webp",
        title: "ARC 200 ST",
        sku: "ARC200ST",
        rating: 4.5,
        shortDesc: "Stable output ARC welding machine.",
        longDesc1: "Smooth welding performance.",
        longDesc2: "Advanced cooling system.",
        images: [
           "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st.webp",    
           "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st-left.webp",
           "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st-front.webp",
           "./images/top-range/arc-series/1+2-phase/arc-200-st/arc-200-st-back.webp",

        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    ARC_250_ST: {
        heroTitle: "ARC WELDING MACHINE",
        heroDesc:  "An ARC welding machine uses an electric arc between an electrode and the workpiece to generate heat and join metals. It is widely used in fabrication, construction, and industrial repair for its strong welds, simplicity, and reliability.",
        heroImage: "./images/top-range/arc-series/1+2-phase/arc-250-st/arc-250-st.webp",
        title: "ARC 250 ST – Industrial-Grade Single/Two Phase ARC Welding Machine",
        sku: "ARC250ST",
        rating: 4.6,
        shortDesc: "The ARC 250 ST is built for medium- to heavy-duty welding operations, offering a stable 20–250A output supported by high-efficiency IGBT inverter technology. Its dual-phase compatibility (220V/440V) ensures flexibility across varied industrial power setups. With the ability to run on 2.5mm continuously and 3.15mm electrodes when needed, it is ideal for fabrication shops, maintenance, and production environments.",
        longDesc1: "The machine delivers a powerful arc with low spatter and deep penetration, ensuring strong weld joints. Rugged construction, thermal protection, and superior duty cycles make it suitable for long-hour operations in demanding environments.",
        longDesc2: "This model combines portability with robustness, making it a dependable choice for professionals.",
        images: [
            "./images/top-range/arc-series/1+2-phase/arc-250-st/arc-250-st.webp",
            "./images/top-range/arc-series/1+2-phase/arc-250-st/arc-250-st-left.webp",
            "./images/top-range/arc-series/1+2-phase/arc-250-st/arc-250-st-front.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    ARC_300_ST: {
        heroTitle: "ARC WELDING MACHINE",
        heroDesc:  "An ARC welding machine uses an electric arc between an electrode and the workpiece to generate heat and join metals. It is widely used in fabrication, construction, and industrial repair for its strong welds, simplicity, and reliability.",
        heroImage: "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st.webp",
        title: "ARC 300 ST - SINGLE + TWO PHASE ARC 300 WELDING MACHINE",
        sku: "ARC300ST",
        rating: 4.7,
        shortDesc: "The ARC 300 ST is an advanced heavy-duty welding solution engineered for fabrication units and industrial sites needing high current output. Powered by IGBT technology, it maintains a highly stable arc at 20–300A with excellent thermal efficiency.",
        longDesc1: "This model supports continuous welding with 3.15mm electrodes and can handle 4.0mm electrodes as well, offering versatility across structural welding, repair jobs, and metal fabrication.",
        longDesc2: "With strong overload protection and high duty cycles, the ARC 300 ST is built to deliver long, uninterrupted welding sessions. Its sturdy industrial design ensures durability while maintaining portability for jobsite mobility.",
        images: [
            "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st.webp",
            "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st-left.webp",
            "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st-front.webp",
            "./images/top-range/arc-series/1+2-phase/arc-300-st/arc-300-st-back.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    ARC_400_ST: {
        heroTitle: "ARC WELDING MACHINE",
        heroDesc:  "An ARC welding machine uses an electric arc between an electrode and the workpiece to generate heat and join metals. It is widely used in fabrication, construction, and industrial repair for its strong welds, simplicity, and reliability.",
        heroImage: "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st.webp",
        title: "ARC 400 ST - ARC 400A INVERTER WELDING MACHINE",
        sku: "ARC400ST",
        rating: 4.8,
        shortDesc: "The ARC 400 ST is designed for high-demand industrial welding applications requiring consistent power across long operational hours. With a 20–400A output range and multi-phase compatibility (1+2+3 phase), it provides unmatched flexibility and reliability across diverse working conditions.",
        longDesc1: "It supports 4.0mm electrodes with ease and offers a smooth, stable arc ideal for heavy structural welding, fabrication workshops, and continuous production environments.",
        longDesc2: "The machine integrates advanced overload, voltage, and current protection systems ensuring maximum safety and performance. Its robust body, high-duty cycle, and premium quality inverter technology make it an ideal choice for industrial manufacturers and professionals.",
        images: [
            "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st.webp",
            "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st-left.webp",
            "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st-front.webp",
            "./images/top-range/arc-series/1+2+3-phase/arc-400-st/arc-400-st-back.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    ARC_300_IJ_T: {
        heroTitle: "ARC WELDING MACHINE",
        heroDesc: "An ARC welding machine uses an electric arc between an electrode and the workpiece to generate heat and join metals. It is widely used in fabrication, construction, and industrial repair for its strong welds, simplicity, and reliability.",
        heroImage: "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt.webp",
        title: "ARC 300 IJ-T – 300A Three-Phase Industrial ARC Welding Machine",
        sku: "ARC300IJT",
        rating: 4.9,
        shortDesc: "The ARC 300 IJ-T is a professional three-phase welding machine built to deliver superior power, stability, and duty cycle for industrial operations. With a smooth 20–300A output, it delivers accurate and consistent welding suitable for high-load fabrication environments. ",
        longDesc1: "This model supports continuous welding with 3.15mm electrodes and can handle 4.0mm electrodes when needed, and is ideal for workshops handling continuous, high-strength weld jobs. Its robust build and advanced protection features make it a trusted choice for industrial welders.",
        longDesc2: "Equipped with heavy-duty IGBT modules, the machine ensures excellent arc stability, low spatter, and long-lasting durability.",
        images: [
            "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt.webp",
            "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt-left.webp",
            "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt-front.webp",
            "./images/top-range/arc-series/three-phase/arc-300-ijt/arc-300-ijt-back.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    ARC_400_ULTRA: {
        heroTitle: "ARC WELDING MACHINE",
        heroDesc:  "An ARC welding machine uses an electric arc between an electrode and the workpiece to generate heat and join metals. It is widely used in fabrication, construction, and industrial repair for its strong welds, simplicity, and reliability.",
        heroImage: "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra.webp",
        title: "ARC 400 ULTRA – 400A INVERTER WELDING MACHINE",
        sku: "ARC400ULTRA",
        rating: 5.0,
        shortDesc: "The ARC 400 ULTRA is a three-phase welding machine for demanding industrial welding applications where power, stability, and reliability are critical.",
        longDesc1: "Designed to comfortably handle 4.0mm electrodes and up to 5.0mm when required, this machine is ideal for thick metal welding, structural fabrication, heavy equipment repair, and industrial maintenance work. Its advanced cooling system, high-duty cycle, and multi-layer protection features enable safe, continuous operation even in harsh working conditions.",
        longDesc2: "Built with heavy-duty inverter technology, it delivers a smooth, consistent arc with a wide 20–400A output range, ensuring excellent weld penetration and uniform bead quality.",
        images: [
            "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra.webp",
            "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra-left.webp",
            "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra-front.webp",
            "./images/top-range/arc-series/three-phase/arc-400-ultra/arc-400-ultra-back.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    ARC_400_IJ: {
        heroTitle: "ARC WELDING MACHINE",
        heroDesc:  "An ARC welding machine uses an electric arc between an electrode and the workpiece to generate heat and join metals. It is widely used in fabrication, construction, and industrial repair for its strong welds, simplicity, and reliability.",
        heroImage: "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij.webp",
        title: "ARC 400 IJ – Heavy-Duty ARC Welding Machine",
        sku: "ARC400IJ",
        rating: 4.9,
        shortDesc: "The ARC 400 IJ is a three-phase welding machine designed for high-performance industrial welding where reliability and strength are essential.",
        longDesc1: "Built with heavy-duty inverter modules, it produces a smooth and powerful arc across a wide 20–400A range. Suitable for 4.0mm and occasionally 5.0mm electrodes, it is perfect for thick metal welding, structural fabrication, and heavy repair jobs.",
        longDesc2: "Its superior cooling system, high-duty cycle, and multi-layer protection ensure safe and continuous operation. This model is ideal for industries requiring power-packed welding performance with maximum stability.",
        images: [
            "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij.webp",
            "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij-left.webp",
            "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij-front.webp",
            "./images/top-range/arc-series/three-phase/arc-400-ij/arc-400-ij-back.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    ARC_630_IJ: {
        heroTitle: "ARC WELDING MACHINE",
        heroDesc: "An ARC welding machine uses an electric arc between an electrode and the workpiece to generate heat and join metals. It is widely used in fabrication, construction, and industrial repair for its strong welds, simplicity, and reliability.",
        heroImage: "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij.webp",
        title: "ARC 630 IJ – HEAVY INDUSTRIAL INVERTER WELDING MACHINE",
        sku: "ARC630IJ",
        rating: 5.0,
        shortDesc: "The ARC 630 IJ is a three-phase powerhouse 630A industrial welding machine engineered for large-scale metal fabrication, construction, and manufacturing units. With multiple IGBT power modules, it ensures extremely stable arc performance even under maximum load.",
        longDesc1: "This model supports 4.0mm and 5.0mm electrodes at 100% duty cycle, making it ideal for heavy structural welding, shipbuilding, machinery manufacturing, and continuous industrial production lines. ",
        longDesc2: "Built for rugged use, it includes advanced over-voltage, over-current, and overheating protection systems, ensuring long life and reliable performance. The ARC 630 IJ stands as a flagship solution for industries requiring unmatched welding power.",
        images: [
            "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij.webp",
            "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij-left.webp",
            "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij-front.webp",
            "./images/top-range/arc-series/three-phase/arc-630-ij/arc-630-ij-back.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    /* ================= MIG SERIES ================= */

    MIG_300_IJ: {
        heroTitle: "MIG WELDING MACHINE",
        heroDesc: "A MIG welding machine uses a continuously fed wire electrode and shielding gas to create clean, strong welds. It is widely used in automotive, fabrication, and manufacturing industries for its high speed, ease of use, and consistent weld quality.",
        heroImage: "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij.webp",
        title: "MIG 300 IJ – BEST 300amp MIG INVERTER WELDING MACHINE",
        sku: "MIG300IJ",
        rating: 4.8,
        shortDesc: "The MIG 300 IJ is a three-phase high-performance industrial MIG welding machine designed for fabrication workshops, manufacturing units, and heavy-duty applications. Powered by advanced IGBT inverter technology, it delivers a smooth, stable welding arc across a wide MIG range of 20–300A and MMA range of 20–270A. ",
        longDesc1: "This model supports 0.8mm and 1.0mm wire with 100% duty cycle, ensuring continuous and clean welds even under demanding workloads. Its separate wire feeder offers excellent control and consistency, making it ideal for various application. ",
        longDesc2: "Engineered for efficiency, the MIG 300 IJ provides reduced spatter, deeper penetration, and a uniform bead finish—making it a preferred choice for professionals who require productivity, precision, and reliability. With strong protection systems and rugged construction, it is built to perform flawlessly in tough industrial environments.",
        images: [
            "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij.webp",
            "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij-left.webp",
            "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij-front.webp",
            "./images/top-range/mig-series/three-phase/mig-300-ij/mig-300-ij-back.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    MIG_400_IJ: {
        heroTitle: "MIG WELDING MACHINE",
        heroDesc: "A MIG welding machine uses a continuously fed wire electrode and shielding gas to create clean, strong welds. It is widely used in automotive, fabrication, and manufacturing industries for its high speed, ease of use, and consistent weld quality.",
        heroImage: "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij.webp",
        title: "MIG 400 IJ – 400amp MIG WELDING MACHINE",
        sku: "MIG400IJ",
        rating: 4.9,
        shortDesc: "The MIG 400 IJ is three-phase welding machine engineered for heavy fabrication facilities requiring stronger weld output and higher duty cycles. Delivering a consistent 20–400A MIG output and 20–370A MMA output, it is a versatile machine suitable for welding thicker materials with 0.8mm, and 1.2mm wires.",
        longDesc1: "Its industrial-grade IGBT modules ensure a stable arc, low spatter, and excellent metal transfer quality, making it ideal for long-hour welding operations. The detachable wire feeder provides maximum control and precision for high-strength welds in automotive fabrication, steel furniture manufacturing, and heavy metal structures.",
        longDesc2: "The MIG 400 IJ features reliable thermal protection, intelligent voltage control, and superior cooling to support continuous operation in challenging industrial conditions. Built for durability and performance, it’s a perfect solution for workshops that demand endurance and professional-grade weld quality.",
        images: [
            "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij.webp",
            "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij-left.webp",
            "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij-front.webp",
            "./images/top-range/mig-series/three-phase/mig-400-ij/mig-400-ij-back.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    MIG_630_IJ: {
        heroTitle: "MIG WELDING MACHINE",
        heroDesc: "A MIG welding machine uses a continuously fed wire electrode and shielding gas to create clean, strong welds. It is widely used in automotive, fabrication, and manufacturing industries for its high speed, ease of use, and consistent weld quality.",
        heroImage: "./images/top-range/mig-series/three-phase/mig-630-ij/mig-630-ij.webp",
        title: "MIG 630 IJ - Industrial MIG welding machine 630A",
        sku: "MIG630IJ",
        rating: 5.0,
        shortDesc: "The MIG 630 IJ is a three-phase high-capacity industrial MIG welding machine designed for large-scale fabrication, construction, and heavy machinery production. Powered by multiple industrial IGBT modules, it delivers smooth, stable arcs, superior penetration, and consistent weld quality on thick metals, making it perfect for shipbuilding, structural steel fabrication, and industrial maintenance.",
        longDesc1: "Supporting 0.8mm, 1.2mm, and 1.6mm wires at 100% duty cycle, the MIG 630 IJ allows uninterrupted welding for long hours, ensuring maximum productivity without compromising performance. Its intelligent protection features safeguard against over-voltage, over-current, and overheating, enhancing durability and long-term reliability.",
        longDesc2: "The separate wire feeder improves precision, mobility, and control, enabling welders to handle large components efficiently. Designed with a rugged, heavy-duty body, this machine withstands tough industrial environments while delivering professional-grade welding results consistently.",
        images: [
            "./images/top-range/mig-series/three-phase/mig-630-ij/mig-630-ij.webp",
            "./images/top-range/mig-series/three-phase/mig-630-ij/mig-630-ij-left.webp",
            "./images/top-range/mig-series/three-phase/mig-630-ij/mig-630-ij-front.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    /* ================= TIG SERIES ================= */

    TIG_250_IJ_S: {
        heroTitle: "TIG WELDING MACHINE",
        heroDesc: "A TIG welding machine uses a non-consumable tungsten electrode to produce precise, high-quality welds. It is ideal for stainless steel, aluminum, and thin materials, and is commonly used where superior finish, accuracy, and control are required.",
        heroImage: "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs.webp",
        title: "TIG 250 IJ-S – SINGLE PHASE 250A TIG WELDING MACHINE",
        sku: "TIG250IJS",
        rating: 4.7,
        shortDesc:"The TIG 250 IJ-S is a professional-grade single-phase TIG welding machine designed for fabricators who demand clean, precise, and high-quality welds. Powered by advanced IGBT inverter technology, it ensures stable arc performance with minimal spatter. The machine supports both TIG and MMA modes, offering flexibility for workshops and repair units.",
        longDesc1: "Equipped with post-flow control, it protects the tungsten electrode and enhances weld quality. Compact, lightweight, and easy to move, the TIG 250 IJ-S is perfect for fabrication, automotive repairs, and on-site welding tasks.",
        longDesc2: "Intelligent over-voltage and over-current protection ensures safe operation, making it a reliable choice for professionals seeking accuracy and efficiency in daily welding operations.",
        images: [
            "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs.webp",
            "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs-left.webp",
            "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs-front.webp",
            "./images/top-range/tig-series/single-phase/tig-250-ijs/tig-250-ijs-back.webp",

        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    TIG_300_IJ_S: {
        heroTitle: "TIG WELDING MACHINE",
        heroDesc: "A TIG welding machine uses a non-consumable tungsten electrode to produce precise, high-quality welds. It is ideal for stainless steel, aluminum, and thin materials, and is commonly used where superior finish, accuracy, and control are required.",
        heroImage: "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs.webp",
        title: "TIG 300 IJ-S – High-Performance Single-Phase TIG Welding Machine",
        sku: "TIG300IJS",
        rating: 4.8,
        shortDesc: "The TIG 300 IJ-S is engineered for heavy-duty precision welding, offering a robust 20–300A output suited for both fine TIG welding and powerful MMA welding tasks. Its IGBT inverter technology delivers outstanding arc stability, deeper penetration, and cleaner weld beads with significantly reduced spatter. ",
        longDesc1: "Ideal for industrial fabrication, this machine supports 1.6–3.15mm tungsten electrodes and delivers smooth performance even during prolonged use.",
        longDesc2: "Advanced features such as post-flow control, hot start, and intelligent overload protection ensure professional-grade results every time. Despite its high output, it remains portable with an ergonomic design—perfect for workshops, fabrication units, and maintenance teams requiring reliability and top-tier welding accuracy.",
        images: [
            "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs.webp",
            "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs-left.webp",
            "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs-front.webp",
            "./images/top-range/tig-series/single-phase/tig-300-ijs/tig-300-ijs-back.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    TIG_300_IJ_T: {
        heroTitle: "TIG WELDING MACHINE",
        heroDesc: "A TIG welding machine uses a non-consumable tungsten electrode to produce precise, high-quality welds. It is ideal for stainless steel, aluminum, and thin materials, and is commonly used where superior finish, accuracy, and control are required.",
        heroImage: "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt.webp",
        title: "TIG 300 IJ-T – High-Performance TIG Welding Machine",
        sku: "TIG300IJT",
        rating: 4.9,
        shortDesc: "The TIG 300 IJ-T is a powerful three-phase TIG welding system built for demanding industrial conditions requiring uncompromised stability and precision. With its 20–300A output and industrial-grade IGBT technology, this model delivers exceptional arc quality and deep penetration for stainless steel, mild steel, and specialized materials. ",
        longDesc1: "Its dual-purpose TIG + MMA capability adds practical versatility for fabrication units. The machine includes advanced safety features such as over-current and over-voltage protection, ensuring consistent performance during long-hour welding. ",
        longDesc2: "Compact yet rugged, the TIG 300 IJ-T offers smooth control, high duty cycles, and superior cooling—making it a preferred choice for industrial fabricators, metal manufacturers, and engineering workshops.",
        images: [
            "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt.webp",
            "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt-left.webp",
            "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt-front.webp",
            "./images/top-range/tig-series/three-phase/tig-300-ijt/tig-300-ijt-back.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    TIG_400_IJ: {
        heroTitle: "TIG WELDING MACHINE",
        heroDesc: "A TIG welding machine uses a non-consumable tungsten electrode to produce precise, high-quality welds. It is ideal for stainless steel, aluminum, and thin materials, and is commonly used where superior finish, accuracy, and control are required.",
        heroImage: "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij.webp",
        title: "TIG 400 IJ – Heavy-Duty 400A TIG Welding Machine",
        sku: "TIG400IJ",
        rating: 5.0,
        shortDesc: "The TIG 400 IJ is three-phase, a high-capacity industrial TIG welding machine designed for fabrication companies that require both precision and power. With its robust output and advanced inverter technology, it produces an ultra-stable arc with minimal noise and spatter.",
        longDesc1: "Ideal for welding thicker materials, it supports a wide range of tungsten electrode sizes and ensures excellent penetration and bead finishing. Its industrial cooling system supports extended working hours without overheating, while the built-in protection features enhance performance and safety. ",
        longDesc2: "Suitable for manufacturing units, automotive industries, heavy fabrication, and complex welding projects, the TIG 400 IJ delivers unmatched accuracy and durability for professional welders.",
        images: [
            "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij.webp",
            "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij-left.webp",
            "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij-front.webp",
            "./images/top-range/tig-series/three-phase/tig-400-ij/tig-400-ij-back.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    TIG_630_IJ: {
        heroTitle: "TIG WELDING MACHINE",
        heroDesc: "A TIG welding machine uses a non-consumable tungsten electrode to produce precise, high-quality welds. It is ideal for stainless steel, aluminum, and thin materials, and is commonly used where superior finish, accuracy, and control are required.",
        heroImage: "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij.webp",
        title: "TIG 630 IJ – Best TIG 630 Welding Machine",
        sku: "TIG630IJ",
        rating: 5.0,
        shortDesc: "The TIG 630 IJ is a three-phase high-performance 630A industrial TIG welding machine engineered for continuous, large-scale welding operations where precision, power, and reliability are critical. With a wide 20–630A output range, this machine is ideal for thick metal welding, pressure vessels, heavy machinery components, pipelines, and structural fabrication in demanding industrial environments.",
        longDesc1: "Powered by advanced multi-module IGBT inverter technology, the TIG 630 IJ delivers exceptional arc stability, smooth current control, and deep weld penetration. This ensures accurate, clean, and high-strength welds even during long duty cycles. Supporting 1.6mm to 6.3mm tungsten electrodes, the machine is suitable for high-precision TIG welding as well as powerful MMA (ARC) welding, offering versatility for multiple applications.",
        longDesc2: "Designed for industrial reliability, the TIG 630 IJ features an intelligent protection system that safeguards against over-voltage, over-current, and overheating. Its high-efficiency cooling system enables safe, stable, and uninterrupted operation under heavy loads. The rugged, heavy-duty construction ensures long service life in harsh workshop and site conditions.",
        images: [
            "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij.webp",
            "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij-left.webp",
            "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij-front.webp",
            "./images/top-range/tig-series/three-phase/tig-630-ij/tig-630-ij-back.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    /* ================= CUT SERIES ================= */

    CUT_100_LGK: {
        heroTitle: "CUTTING MACHINE (PLASMA CUT)",
        heroDesc: "A cutting machine uses a high-temperature plasma arc to cut through electrically conductive metals with speed and accuracy. It is widely used in fabrication, metal workshops, and industrial applications for its clean cuts, efficiency, and versatility.",
        heroImage: "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk.webp",
        title: "CUT 100-LGK – BEST TIG 630 WELDING MACHINE",
        sku: "CUT100LGK",
        rating: 4.7,
        shortDesc: "The CUT-100 LGK is a high-performance 100A industrial plasma cutting machine designed for fast, clean, and precise cutting in fabrication workshops, manufacturing units, and heavy-duty industrial environments across India. Powered by advanced inverter technology, it delivers smooth cutting performance with minimal waste and excellent edge finish, ensuring higher productivity and reduced rework.",
        longDesc1: "Built to handle thick plates and continuous cutting applications, this machine offers stable arc control and consistent cutting quality even under demanding operating conditions. Its heavy-duty design makes it suitable for industrial fabrication, structural work, repair jobs, and metal processing operations.",
        longDesc2: "The CUT-100 LGK is equipped with an intelligent protection system that safeguards against over-current, overheating, and voltage fluctuations, ensuring long service life and safe operation. An efficient cooling system supports extended and uninterrupted cutting cycles, making it ideal for high-demand industrial use.Engineered for speed, accuracy, and reliability, the CUT-100 LGK is the perfect solution for businesses looking for a durable, power-efficient, and consistent plasma cutting machine in India.",
        images: [
            "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk.webp",
            "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk-left.webp",
            "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk-front.webp",
            "./images/top-range/cut-series/three-phase/cut-100-lgk/cut-100-lgk-back.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    /* ================= PORTABLE ARC SERIES ================= */
    APT_200: {
        heroTitle: "Portable ARC Welding Machine",
        heroDesc: "Compact & efficient ARC welder",
        heroImage: "./images/top-range/portable-arc-series/single-phase/apt-200/apt-200.webp",
        title: "APT 200 – SINGLE PHASE TRANSFORMER WELDING MACHINE",
        sku: "APT200",
        rating: 4.8,
        shortDesc: "The APT 200 is built for users who need superior welding performance in a compact, easy-to-handle design. As a premier portable ARC welding machine weighing just 20 KGS, it is the perfect solution for on-site maintenance, repair work, and home workshops. This highly efficient coil based welding machine operates on a standard AC 220V supply, delivering a stable output current from 75A to 200A.",
        longDesc1: "With 6.5 KVA rated power and efficient inverter technology, it provides smooth arc characteristics suitable for supporting electrodes up to 2.5mm, ensuring low spatter, strong penetration, and cleaner weld beads.",
        longDesc2: "Its lightweight design, coupled with overload protection and stable performance, makes the APT 200 an excellent choice for technicians and small fabrication units seeking a reliable transformer welding machine.",

        images: [
            "./images/top-range/portable-arc-series/single-phase/apt-200/apt-200.webp",
            "./images/top-range/portable-arc-series/single-phase/apt-200/apt-200-front.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    APT_250: {
        heroTitle: "Portable ARC Welding Machine",
        heroDesc: "High accuracy welding solution",
        heroImage: "./images/top-range/portable-arc-series/single-phase/apt-250/apt-250.webp",

        title: "APT 250 - MULTI-PURPOSE ARC WELDING MACHINE FOR WORKSHOP & FIELD WORK",
        sku: "APT250",
        rating: 4.9,

        shortDesc: "The APT 250 offers a strong balance of power, portability, and reliability, making it a highly versatile multi-purpose ARC welding machine. Suitable for fabrication shops, automotive service centers, and on-site repairs, this transformer welding machine operates on AC 220V and is rated for 7.2 KVA. ",
        longDesc1: "Equipped with advanced IGBT inverter technology, it delivers a stable output current of 75A to 250A. Weighing a highly portable 30 KGS, it supports electrodes up to 3.15mm, resulting in deep penetration and smooth weld finishing with reduced spatter. ",
        longDesc2: "Designed with a durable casing and intelligent thermal protection, the APT 250 is the ideal portable coil based welding machine for professionals needing consistent results across various materials.",

        images: [
            "./images/top-range/portable-arc-series/single-phase/apt-250/apt-250.webp",
            "./images/top-range/portable-arc-series/single-phase/apt-250/apt-250-front.webp",
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    APT_250_H: {
        heroTitle: "Portable ARC Welding Machine",
        heroDesc: "Heavy duty ARC welder",
        heroImage: "./images/top-range/portable-arc-series/1+2 phase/apt-250-h.webp",

        title: "APT 250 H HEAVY-DUTY SINGLE TWO PHASE WELDING MACHINE",
        sku: "APT250H",
        rating: 5.0,

        shortDesc: "The APT 250 H is a robust, heavy-duty transformer welding machine engineered for challenging fabrication tasks and industrial use. Its core capability lies in its Versatile Power Options, operating on both AC 220V and 440V input voltage, making it a true multi-voltage coil based welding machine.",
        longDesc1: "With a rated power of 7.2 KVA and a strong output of 75A to 250A, it delivers superior welding stability, improved arc force, and is built for industrial applications requiring extended operating hours.",
        longDesc2: "Ideal for using 3.15mm electrodes on thicker materials, the 30 KGS unit is a premium choice, offering robust build quality and advanced overload protection for professionals demanding maximum reliability and power.",

        images: [
            "./images/top-range/portable-arc-series/1+2 phase/apt-250-h.webp"
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    /* ================= STUD ARC SERIES ================= */
    AST_150: {
        heroTitle: "Stud ARC Welding Machine",
        heroDesc: "Reliable stud arc welding solution",
        heroImage: "./images/top-range/stud-arc-series/1+2 phase/ast-150.webp",

        title: "AST 150 – LIGHT WEIGHT STUD 150A WELDING MACHINE",
        sku: "AST150",
        rating: 4.7,

        shortDesc: "The AST 150 is a highly portable Transformer-Based ARC welding machine designed for technicians, small workshops, and field repairs requiring quick, reliable welding output.",
        longDesc1: "This Made in India model operates on versatile AC 220V/440V input voltage, making it a true multi-voltage welder for different job sites. Weighing 35 KGS with sturdy wheels for easy mobility, it delivers a stable output current of 75A-150A at a rated power of 6 KVA.",
        longDesc2: "Suitable for light fabrication and general welding tasks, the AST 150 is built with a Durable Yellow Metal Housing and is the perfect solution for on-the-go welders seeking dependable performance.",

        images: [
            "./images/top-range/stud-arc-series/1+2 phase/ast-150.webp"
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    AST_200: {
        heroTitle: "Stud ARC Welding Machine",
        heroDesc: "High accuracy stud welding system",
        heroImage: "./images/top-range/stud-arc-series/1+2 phase/ast-200.webp",

        title: "AST 200 – COMPACT POWER PORTABLE TRANSFORMER WELDING MACHINE",
        sku: "AST200",
        rating: 4.8,

        shortDesc: "The AST 200 brings industrial Transformer-Based ARC welding performance into a compact, easy-to-carry design. This portable coil welder features a robust Durable Yellow Metal Housing and a weight of 40 KGS, complete with sturdy wheels for exceptional mobility.",
        longDesc1: "It is a multi-voltage machine, handling both AC 220V/440V input and delivering a powerful output of 75A-200A at a rated power of 8 KVA. ",
        longDesc2: "Suitable for workshops, automotive repairs, and maintenance jobs, the AST 200 ensures a highly stable arc for stronger welds and reduced spatter. This Made in India unit is ideal for technicians looking for portability without sacrificing industrial performance.",

        images: [
            "./images/top-range/stud-arc-series/1+2 phase/ast-200.webp"
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    AST_250: {
        heroTitle: "Stud ARC Welding Machine",
        heroDesc: "Precision stud welding machine",
        heroImage: "./images/top-range/stud-arc-series/1+2 phase/ast-250.webp",

        title: "AST 250 - HEAVY-DUTY PORTABLE ARC WELDING MACHINE",
        sku: "AST250",
        rating: 4.9,

        shortDesc: "The AST 250 delivers powerful 250A welding performance in a compact, portable Transformer-Based machine ideal for medium-duty fabrication and industrial repair work.",
        longDesc1: "This model operates on AC 220V/440V input, providing versatility as a multi-voltage ARC welder. Rated at 10 KVA, it delivers a strong output of 75A-250A and ensures consistent arc stability. Its 50 KGS weight and sturdy wheels allow for easy transport for field jobs and onsite fabrication.",
        longDesc2: "With a robust, Durable Yellow Metal body, the AST 250 provides exceptional reliability for professional heavy-duty portable welders.",

        images: [
            "./images/top-range/stud-arc-series/1+2 phase/ast-250.webp"
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    AST_300: {
        heroTitle: "Stud ARC Welding Machine",
        heroDesc: "Industrial grade stud welder",
        heroImage: "./images/top-range/stud-arc-series/1+2 phase/ast-300.webp",

        title: "AST 300 – 300A STUD WELDING MACHINE",
        sku: "AST300",
        rating: 5.0,

        shortDesc: "The AST 300 is a professional-grade Transformer-Based ARC welder engineered for high current output with easy transportation. With a robust output range of 75A-300A, it provides powerful welding performance suited for structural repairs and heavy fabrication work.",
        longDesc1: "Operating on a multi-voltage AC 220V/440V input, this machine delivers 15 KVA of rated power. Its 60 KGS weight and included sturdy wheels offer workshop flexibility. ",
        longDesc2: "The AST 300 is the ideal Made in India heavy-duty coil welding machine with a Durable Yellow Metal body for consistent welding quality on demanding jobs.",

        images: [
            "./images/top-range/stud-arc-series/1+2 phase/ast-300.webp"
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    },

    AST_400: {
        heroTitle: "Stud ARC Welding Machine",
        heroDesc: "Heavy industrial stud welding solution",
        heroImage: "./images/top-range/stud-arc-series/1+2 phase/ast-400.webp",

        title: "AST 400 – BEST STUD WELDING MACHINE",
        sku: "AST400",
        rating: 5.0,

        shortDesc: "The AST 400 stands at the top of the series, offering a powerful 400A output suited for the most demanding welding applications, including construction sites and industrial maintenance.",
        longDesc1: "This heavy-duty industrial welding machine is designed for performance, with a rated power of 20 KVA. It supports multi-voltage operation on AC 220V/440V input and delivers a strong output of 75A-400A. Weighing 85 KGS, its rugged Durable Yellow Metal Housing and sturdy wheels make it excellent for outdoor fabrication. ",
        longDesc2: "The AST 400 is the ultimate Made in India heavy-duty Transformer-Based welding machine for professionals needing maximum power and reliability.",

        images: [
            "./images/top-range/stud-arc-series/1+2 phase/ast-400.webp"
        ],
        /* ================= TAB DATA ================= */
        tabs: {
            features: {
                cardsLeft: [
                    {
                        title: "Multiprocess Capabilities",
                        desc: "MIG, Flux-cored, Stick and TIG welding.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Auto Spool Gun Detect™",
                        desc: "Automatically detects spool gun.",
                        img: "./images/industry-equipement.jpg"
                    }
                ],
                cardsRight: [
                    {
                        title: "Fan-On-Demand™",
                        desc: "Runs only when needed.",
                        img: "./images/industry-equipement.jpg"
                    },
                    {
                        title: "Multi Voltage Plug (MVP™)",
                        desc: "120V / 240V support.",
                        img: "./images/industry-equipement.jpg"
                    }
                ]
            },

            specification: [
                { label: "Amperage", value: "20A – 230A" },
                { label: "Current Type", value: "DC" },
                { label: "Input Voltage", value: "110V / 230V" },
                { label: "Warranty", value: "3 Years" }
            ],

            accessories: [
                {
                    title: "Protective Nylon Cover",
                    desc: "Protects machine from dust & damage.",
                    img: "./images/industry-equipement.jpg"
                },
                {
                    title: "Cylinder Rack",
                    desc: "Easy gas cylinder mounting.",
                    img: "./images/industry-equipement.jpg"
                }
            ],

            qa: [
                {
                    question: "How many amps does it support?",
                    answer: "Supports up to 230A output.",
                    author: "Admin"
                }
            ]
        }
    }
};

// =================PRODUCT DETAILS PAGE LOAD =================
document.addEventListener("DOMContentLoaded", () => {

    if (!productId || !products[productId]) {
        alert("Product not found");
        return;
    }

    const p = products[productId];

    // HERO
    heroTitle.textContent = p.heroTitle;
    heroDesc.textContent = p.heroDesc;
    heroImage.src = p.heroImage;

    // DETAILS
    productTitle.textContent = p.title;
    productSku.textContent = "SKU: " + p.sku;
    ratingNumber.textContent = p.rating;

    // Stars
    const filledStars = Math.round(p.rating);

    ratingStars.innerHTML = `
    ${'<i class="fa-solid fa-star star"></i>'.repeat(filledStars)}
`;

    shortDesc.textContent = p.shortDesc;
    longDesc1.textContent = p.longDesc1;
    longDesc2.textContent = p.longDesc2;

    // IMAGES
    const thumbs = document.querySelector(".thumbs");
    thumbs.innerHTML = "";

    mainImage.src = p.images[0];
    openImage.href = p.images[0];

    p.images.forEach((img, index) => {
        const box = document.createElement("div");
        box.className = `thumb-box ${index === 0 ? "active" : ""}`;
        box.innerHTML = `<img src="${img}">`;

        box.onclick = () => {
            document.querySelectorAll(".thumb-box")
                .forEach(t => t.classList.remove("active"));
            box.classList.add("active");
            mainImage.src = img;
            openImage.href = img;
        };

        thumbs.appendChild(box);
    });

});

// ----------------- Tab Click Events -------------------
document.querySelectorAll('.custom-tabs .tab').forEach((tab, index) => {
    tab.addEventListener("click", () => {

        // Remove active class from all tabs
        document.querySelectorAll('.custom-tabs .tab')
            .forEach(t => t.classList.remove('active'));

        tab.classList.add('active');

        // Hide all tab-content
        document.querySelectorAll('.tab-content')
            .forEach(c => c.classList.remove('active'));

        // Show the matching content box
        const ids = ["features", "specification", "accessories", "qa"];
        document.getElementById(ids[index]).classList.add("active");
    });
});


// ================== PRODUCT TAB DESIGN =================

function renderFeatures(data) {
    document.getElementById("features").innerHTML = `
    <h3>FEATURES</h3>
    <div class="features-wrapper">
      <div class="features-column">
        ${data.cardsLeft.map(c => `
          <div class="feature-card">
            <img src="${c.img}">
            <div class="fc-text">
              <h4>${c.title}</h4>
              <p>${c.desc}</p>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="features-column">
        ${data.cardsRight.map(c => `
          <div class="feature-card">
            <img src="${c.img}">
            <div class="fc-text">
              <h4>${c.title}</h4>
              <p>${c.desc}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderSpecification(specs) {
    document.getElementById("specification").innerHTML = `
    <h3>SPECIFICATION</h3>
    <div class="spec-section">
      ${specs.map(s => `
        <div class="spec-row">
          <div class="spec-label">${s.label}</div>
          <div class="spec-value">${s.value}</div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderAccessories(items) {
    document.getElementById("accessories").innerHTML = `
    <h3>ACCESSORIES</h3>
    <div class="accessories-grid">
      ${items.map(a => `
        <div class="acc-card">
          <img src="${a.img}">
          <h4>${a.title}</h4>
          <p>${a.desc}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderQA(list) {
    document.getElementById("qa").innerHTML = `
    <h3>QUESTION & ANSWER</h3>
    ${list.map(q => `
      <div class="qa-item">
        <div class="qa-question">
          <div class="q-icon">Q</div>
          <div class="q-content">
            <h4>${q.question}</h4>
          </div>
        </div>
        <div class="qa-answer">
          <p class="ans-text">${q.answer}</p>
          <span>— ${q.author}</span>
        </div>
      </div>
    `).join("")}
  `;
}
document.addEventListener("DOMContentLoaded", () => {
    const product = products[productId];
    if (!product) return;

    renderFeatures(product.tabs.features);
    renderSpecification(product.tabs.specification);
    renderAccessories(product.tabs.accessories);
    renderQA(product.tabs.qa);
});


// ---------------------- Download Brochure Model----------------------
const modalOverlay = document.getElementById("modalOverlay");
const modalBox = document.getElementById("modalBox");
const closeModal = document.getElementById("closeModal");

// Open modal on button click
document.querySelector(".brochure-btn").addEventListener("click", () => {
    modalOverlay.style.display = "block";
    modalBox.style.display = "block";
});

// Close modal
closeModal.addEventListener("click", () => {
    modalOverlay.style.display = "none";
    modalBox.style.display = "none";
});


modalOverlay.addEventListener("click", () => {
    modalOverlay.style.display = "none";
    modalBox.style.display = "none";
});

document.getElementById("brochureForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const link = document.createElement('a');
    link.href = "./brochure.pdf";
    link.download = "Brochure.pdf";
    link.click();

    modalOverlay.style.display = "none";
    modalBox.style.display = "none";
});


