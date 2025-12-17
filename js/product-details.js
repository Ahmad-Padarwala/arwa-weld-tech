// Product Details JSON
// ================= READ PRODUCT ID FROM URL =================
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// ================= PRODUCT DETAILS JSON DATA =================
const products = {

    /* ================= ARC SERIES ================= */

    ARC_200_IGOLD: {
        heroTitle: "ARC Welding Equipment",
        heroDesc: "Reliable & powerful ARC welding machines",
        heroImage: "./images/top-range/arc-series/single-phase/arc-200-igold.webp",
        title: "ARC 200-IGOLD",
        sku: "ARC200IG",
        rating: 4.6,
        shortDesc: "Compact and powerful ARC welding machine.",
        longDesc1: "Designed for workshop and industrial usage.",
        longDesc2: "High duty cycle with stable arc output.",
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
        heroTitle: "ARC Welding Equipment",
        heroDesc: "High duty cycle ARC welding solution",
        heroImage: "./images/top-range/arc-series/single-phase/arc-250-igold/arc-250-igold.webp",
        title: "ARC 250-IGOLD",
        sku: "ARC250IG",
        rating: 4.7,
        shortDesc: "High duty cycle ARC welding machine.",
        longDesc1: "Ideal for fabrication and maintenance work.",
        longDesc2: "Stable arc with excellent performance.",
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
        heroTitle: "ARC Welding Equipment",
        heroDesc: "Reliable & compact ARC welding machine",
        heroImage: "./images/top-range/arc-series/single-phase/arc-250-ijs/arc-250-ijs.webp",
        title: "ARC 250 IJ-S",
        sku: "ARC250IJS",
        rating: 4.5,
        shortDesc: "Reliable and compact ARC welder.",
        longDesc1: "Suitable for small workshops.",
        longDesc2: "Energy efficient and portable.",
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
        heroTitle: "ARC Welding Equipment",
        heroDesc: "Professional ARC welding solution",
        heroImage: "./images/top-range/arc-series/single-phase/arc-300-ijs/arc-300-ijs.webp",
        title: "ARC 300 IJ-S",
        sku: "ARC300IJS",
        rating: 4.8,
        shortDesc: "Professional ARC welding machine.",
        longDesc1: "Heavy-duty welding applications.",
        longDesc2: "Long-lasting performance.",
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
        heroTitle: "ARC Welding Equipment",
        heroDesc: "Stable output ARC welding machines",
        heroImage: "./images/top-range/arc-series/1+2-phase/arc-200-st.webp",
        title: "ARC 200 ST",
        sku: "ARC200ST",
        rating: 4.5,
        shortDesc: "Stable output ARC welding machine.",
        longDesc1: "Smooth welding performance.",
        longDesc2: "Advanced cooling system.",
        images: [
            "./images/top-range/arc-series/1+2-phase/arc-200-st.webp"
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
        heroTitle: "ARC Welding Equipment",
        heroDesc: "Advanced ARC welding technology",
        heroImage: "./images/top-range/arc-series/1+2-phase/arc-250-st.webp",
        title: "ARC 250 ST",
        sku: "ARC250ST",
        rating: 4.6,
        shortDesc: "Advanced ARC welding machine.",
        longDesc1: "Efficient heat dissipation.",
        longDesc2: "Consistent arc quality.",
        images: [
            "./images/top-range/arc-series/1+2-phase/arc-250-st.webp"
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
        heroTitle: "ARC Welding Equipment",
        heroDesc: "Efficient ARC welding solution",
        heroImage: "./images/top-range/arc-series/1+2-phase/arc-300-st.webp",
        title: "ARC 300 ST",
        sku: "ARC300ST",
        rating: 4.7,
        shortDesc: "Efficient ARC welding output.",
        longDesc1: "Industrial-grade components.",
        longDesc2: "Long operational life.",
        images: [
            "./images/top-range/arc-series/1+2-phase/arc-300-st.webp"
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
        heroTitle: "ARC Welding Equipment",
        heroDesc: "Durable industrial ARC welder",
        heroImage: "./images/top-range/arc-series/1+2+3-phase/arc-400-st.webp",
        title: "ARC 400 ST",
        sku: "ARC400ST",
        rating: 4.8,
        shortDesc: "Durable industrial ARC welder.",
        longDesc1: "Heavy-duty applications.",
        longDesc2: "Rugged build quality.",
        images: [
            "./images/top-range/arc-series/1+2+3-phase/arc-400-st.webp"
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
        heroTitle: "ARC Welding Equipment",
        heroDesc: "High performance three phase ARC welder",
        heroImage: "./images/top-range/arc-series/three-phase/arc-300-ijt.webp",
        title: "ARC 300 IJ-T",
        sku: "ARC300IJT",
        rating: 4.9,
        shortDesc: "High performance three phase ARC welder.",
        longDesc1: "Ideal for industrial plants.",
        longDesc2: "Excellent arc stability.",
        images: [
            "./images/top-range/arc-series/three-phase/arc-300-ijt.webp"
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
        heroTitle: "ARC Welding Equipment",
        heroDesc: "Ultra heavy duty ARC welding machine",
        heroImage: "./images/top-range/arc-series/three-phase/arc-400-ultra.webp",
        title: "ARC 400-ULTRA",
        sku: "ARC400ULTRA",
        rating: 5.0,
        shortDesc: "Ultra heavy-duty ARC welding machine.",
        longDesc1: "Extreme industrial performance.",
        longDesc2: "Maximum duty cycle.",
        images: [
            "./images/top-range/arc-series/three-phase/arc-400-ultra.webp"
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
        heroTitle: "ARC Welding Equipment",
        heroDesc: "Powerful ARC welding solution",
        heroImage: "./images/top-range/arc-series/three-phase/arc-400-ij.webp",
        title: "ARC 400-IJ",
        sku: "ARC400IJ",
        rating: 4.9,
        shortDesc: "Powerful ARC welding machine.",
        longDesc1: "Stable arc control.",
        longDesc2: "Industrial reliability.",
        images: [
            "./images/top-range/arc-series/three-phase/arc-400-ij.webp"
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
        heroTitle: "ARC Welding Equipment",
        heroDesc: "High capacity industrial ARC welder",
        heroImage: "./images/top-range/arc-series/three-phase/arc-630-ij.webp",
        title: "ARC 630-IJ",
        sku: "ARC630IJ",
        rating: 5.0,
        shortDesc: "High capacity industrial ARC welder.",
        longDesc1: "Heavy structural welding.",
        longDesc2: "Maximum output power.",
        images: [
            "./images/top-range/arc-series/three-phase/arc-630-ij.webp"
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
        heroTitle: "MIG Welding Equipment",
        heroDesc: "Efficient MIG welding machines",
        heroImage: "./images/top-range/mig-series/three-phase/mig-300-ij.webp",
        title: "MIG 300-IJ",
        sku: "MIG300IJ",
        rating: 4.8,
        shortDesc: "Efficient MIG welding machine.",
        longDesc1: "Smooth wire feed system.",
        longDesc2: "Stable welding arc.",
        images: [
            "./images/top-range/mig-series/three-phase/mig-300-ij.webp"
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
        heroTitle: "MIG Welding Equipment",
        heroDesc: "Robust MIG welding machines",
        heroImage: "./images/top-range/mig-series/three-phase/mig-400-ij.webp",
        title: "MIG 400-IJ",
        sku: "MIG400IJ",
        rating: 4.9,
        shortDesc: "Robust MIG welding solution.",
        longDesc1: "Heavy fabrication work.",
        longDesc2: "High efficiency welding.",
        images: [
            "./images/top-range/mig-series/three-phase/mig-400-ij.webp"
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
        heroTitle: "MIG Welding Equipment",
        heroDesc: "Heavy-duty MIG welding system",
        heroImage: "./images/top-range/mig-series/three-phase/mig-630-ij.webp",
        title: "MIG 630-IJ",
        sku: "MIG630IJ",
        rating: 5.0,
        shortDesc: "Heavy-duty MIG welding machine.",
        longDesc1: "Industrial fabrication use.",
        longDesc2: "High output performance.",
        images: [
            "./images/top-range/mig-series/three-phase/mig-630-ij.webp"
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
        heroTitle: "TIG Welding Equipment",
        heroDesc: "Precision TIG welding machines",
        heroImage: "./images/top-range/tig-series/single-phase/tig-250-ijs.webp",
        title: "TIG 250 IJ-S",
        sku: "TIG250IJS",
        rating: 4.7,
        shortDesc: "Precision TIG welding machine.",
        longDesc1: "Ideal for stainless steel.",
        longDesc2: "Smooth arc control.",
        images: [
            "./images/top-range/tig-series/single-phase/tig-250-ijs.webp"
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
        heroTitle: "TIG Welding Equipment",
        heroDesc: "High accuracy TIG welding machines",
        heroImage: "./images/top-range/tig-series/single-phase/tig-300-ijs.webp",
        title: "TIG 300 IJ-S",
        sku: "TIG300IJS",
        rating: 4.8,
        shortDesc: "High accuracy TIG welder.",
        longDesc1: "Professional welding results.",
        longDesc2: "Reliable and durable.",
        images: [
            "./images/top-range/tig-series/single-phase/tig-300-ijs.webp"
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
        heroTitle: "TIG Welding Equipment",
        heroDesc: "Industrial TIG welding solution",
        heroImage: "./images/top-range/tig-series/three-phase/tig-300-ijt.webp",
        title: "TIG 300 IJ-T",
        sku: "TIG300IJT",
        rating: 4.9,
        shortDesc: "Industrial TIG welding machine.",
        longDesc1: "High precision welding.",
        longDesc2: "Continuous operation capable.",
        images: [
            "./images/top-range/tig-series/three-phase/tig-300-ijt.webp"
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
        heroTitle: "TIG Welding Equipment",
        heroDesc: "Stable output TIG welder",
        heroImage: "./images/top-range/tig-series/three-phase/tig-400-ij.webp",
        title: "TIG 400-IJ",
        sku: "TIG400IJ",
        rating: 5.0,
        shortDesc: "Stable output TIG welding machine.",
        longDesc1: "Industrial applications.",
        longDesc2: "High duty cycle.",
        images: [
            "./images/top-range/tig-series/three-phase/tig-400-ij.webp"
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
        heroTitle: "TIG Welding Equipment",
        heroDesc: "Heavy industrial TIG welder",
        heroImage: "./images/top-range/tig-series/three-phase/tig-630-ij.webp",
        title: "TIG 630-IJ",
        sku: "TIG630IJ",
        rating: 5.0,
        shortDesc: "Heavy industrial TIG welder.",
        longDesc1: "High current output.",
        longDesc2: "Rugged industrial design.",
        images: [
            "./images/top-range/tig-series/three-phase/tig-630-ij.webp"
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
        heroTitle: "Plasma Cutting Equipment",
        heroDesc: "High precision plasma cutting machines",
        heroImage: "./images/top-range/cut-series/three-phase/cut-100-lgk.webp",
        title: "CUT-100 LGK",
        sku: "CUT100LGK",
        rating: 4.7,
        shortDesc: "High performance plasma cutting machine.",
        longDesc1: "Smooth and precise cutting.",
        longDesc2: "Industrial metal cutting solution.",
        images: [
            "./images/top-range/cut-series/three-phase/cut-100-lgk.webp"
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
        heroImage: "./images/top-range/portable-arc-series/single-phase/apt-200.webp",

        title: "APT-200",
        sku: "APT200",
        rating: 4.8,

        shortDesc: "Portable single phase ARC welding machine.",
        longDesc1: "Excellent arc quality with stable performance.",
        longDesc2: "Lightweight and easy to carry for on-site welding.",

        images: [
            "./images/top-range/portable-arc-series/single-phase/apt-200.webp"
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
        heroImage: "./images/top-range/portable-arc-series/single-phase/apt-250.webp",

        title: "APT-250",
        sku: "APT250",
        rating: 4.9,

        shortDesc: "High performance single phase ARC welder.",
        longDesc1: "Smooth and accurate welding output.",
        longDesc2: "Ideal for workshops and fabrication jobs.",

        images: [
            "./images/top-range/portable-arc-series/single-phase/apt-250.webp"
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

        title: "APT-250 H",
        sku: "APT250H",
        rating: 5.0,

        shortDesc: "Heavy duty 1+2 phase ARC welding machine.",
        longDesc1: "Precision welding with enhanced power output.",
        longDesc2: "Designed for continuous industrial usage.",

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

        title: "AST-150",
        sku: "AST150",
        rating: 4.7,

        shortDesc: "Compact 1+2 phase stud ARC welding machine.",
        longDesc1: "Excellent arc quality for consistent stud welding.",
        longDesc2: "Designed for smooth and reliable operation.",

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

        title: "AST-200",
        sku: "AST200",
        rating: 4.8,

        shortDesc: "High accuracy 1+2 phase stud ARC welder.",
        longDesc1: "Stable welding output for precision jobs.",
        longDesc2: "Ideal for fabrication and industrial use.",

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

        title: "AST-250",
        sku: "AST250",
        rating: 4.9,

        shortDesc: "Heavy duty stud ARC welding machine.",
        longDesc1: "High accuracy welding performance.",
        longDesc2: "Built for continuous industrial operation.",

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

        title: "AST-300",
        sku: "AST300",
        rating: 5.0,

        shortDesc: "Industrial 1+2 phase stud ARC welding machine.",
        longDesc1: "Consistent arc performance under heavy load.",
        longDesc2: "Rugged design for demanding environments.",

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

        title: "AST-400",
        sku: "AST400",
        rating: 5.0,

        shortDesc: "High power stud ARC welding machine.",
        longDesc1: "Designed for heavy duty industrial applications.",
        longDesc2: "Maximum efficiency with robust construction.",

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


