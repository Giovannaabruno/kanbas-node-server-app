export default[
    {
        _id: "M101",
        name: "Introduction to Rocket Propulsion",
        description: "Basic principles of rocket propulsion and rocket engines.",
        course: "RS101",
        lessons: [
            {
                _id: "L101",
                name: "History of Rocketry",
                description: "A brief history of rocketry and space exploration.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Rocket Propulsion Fundamentals",
                description: "Basic principles of rocket propulsion.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Rocket Engine Types",
                description: "Overview of different types of rocket engines.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Fuel and Combustion",
        description: "Understanding rocket fuel, combustion processes, and efficiency.",
        course: "RS101",
        lessons: [
            {
                _id: "L201",
                name: "Rocket Fuel",
                description: "Overview of different types of rocket fuels.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Combustion Processes",
                description: "Understanding combustion processes and efficiency.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Combustion Instability",
                description: "Understanding combustion instability and mitigation.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Nozzle Design",
        description: "Principles of rocket nozzle design and performance optimization.",
        course: "RS101",
        lessons: [
            {
                _id: "L301",
                name: "Nozzle Design",
                description: "Overview of different types of rocket nozzles.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Nozzle Performance",
                description: "Understanding nozzle performance and efficiency.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Nozzle Optimization",
                description: "Optimizing nozzle design for specific applications.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Introduction to Aerodynamics",
        description: "Basic principles and applications of aerodynamics.",
        course: "RS102",
        lessons: [
            {
                _id: "L101",
                name: "History of Aerodynamics",
                description: "A look at the development of aerodynamics in history.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Principles of Fluid Dynamics",
                description: "Introduction to the basic principles of fluid dynamics.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Airfoil Design and Lift",
                description: "Understanding airfoil design and its impact on lift generation.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Fundamentals of Aerodynamics",
        description: "Learn about the study of the properties of moving air and the interaction between the air and solid bodies moving through it.",
        course: "RS102",
        lessons: [
            {
                _id: "L201",
                name: "Aerodynamic Forces",
                description: "Introduction to the four fundamental aerodynamic forces: lift, drag, thrust, and weight, and their interactions in flight.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Airfoil Design",
                description: "Study of airfoil shapes and their effects on lift and drag, including calculations of pressure distribution and airflow.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Boundary Layers",
                description: "Exploration of boundary layers, including laminar and turbulent flow, and how they affect aerodynamic performance.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Subsonic and Supersonic Flow",
        description: "Learn about when the speed is less than the speed of sound.",
        course: "RS102",
        lessons: [
            {
                _id: "L301",
                name: "Subsonic Flow Dynamics",
                description: "Introduction to subsonic flow characteristics, focusing on low-speed aerodynamics and the behavior of airflow around objects at speeds below the speed of sound.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Supersonic Flow and Shock Waves",
                description: "Study of supersonic flow, shock waves, and their impact on aerodynamic forces and aircraft design at speeds exceeding the speed of sound.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Mach Number and Flow Transition",
                description: "Understanding the concept of Mach number, the transition between subsonic and supersonic regimes, and the effects of compressibility on flow characteristics.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M104",
        name: "Aerodynamic Heating",
        description: "Learn about when the speed is less than the speed of sound.",
        course: "RS102",
        lessons: [
            {
                _id: "L401",
                name: "Heat Transfer Mechanisms",
                description: "An overview of conduction, convection, and radiation, and their roles in aerodynamic heating during high-speed flight.",
                module: "M104"
            },
            {
                _id: "L402",
                name: "Thermal Protection Systems",
                description: "Study of thermal protection methods and materials used to manage heat buildup in aircraft and spacecraft.",
                module: "M104"
            },
            {
                _id: "L403",
                name: "High-Speed Aerodynamics and Heat Generation",
                description: "Exploration of how increasing speed, particularly in the supersonic and hypersonic regimes, generates significant aerodynamic heating.",
                module: "M104"
            }
        ]
    },
    {
        _id: "M101",
        name: "Introduction to Spacecraft Design",
        description: "Fundamentals of spacecraft design, including structure and propulsion.",
        course: "RS103",
        lessons: [
            {
                _id: "L101",
                name: "Spacecraft Structures",
                description: "Overview of the structural design principles for spacecraft.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Spacecraft Propulsion Systems",
                description: "Detailed analysis of propulsion systems used in spacecraft.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Power Systems for Spacecraft",
                description: "Understanding spacecraft power systems and their integration.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Spacecraft Structural Design",
        description: "explores the principles of designing a spacecraft's physical framework to endure the rigors of space, including launch forces, thermal extremes, and micrometeoroid impacts. The course covers material selection, structural integrity, and weight optimization to ensure mission viability..",
        course: "RS103",
        lessons: [
            {
                _id: "L201",
                name: "Material Selection for Spacecraft",
                description: "An overview of materials commonly used in spacecraft design, focusing on their properties such as strength, weight, and resistance to extreme environments.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Structural Analysis and Load Distribution",
                description: "Understanding the analysis of structural loads and how they are distributed across spacecraft to maintain integrity during launch and operation.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Power Systems for Spacecraft",
                description: "Understanding spacecraft power systems and their integration.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Orbital Mechanics",
        description: "Covers the principles of spacecraft motion, including gravitational forces, orbital paths, and satellite maneuvers, with a focus on mission planning and trajectory control.",
        course: "RS103",
        lessons: [
            {
                _id: "L301",
                name: "Fundamentals of Orbital Motion",
                description: "An introduction to the basic principles of orbital mechanics, covering topics such as Newton’s laws, gravitational forces, and types of orbits.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Orbital Transfers and Maneuvers",
                description: "Examine techniques for changing a spacecraft’s orbit, including Hohmann transfers, bi-elliptic transfers, and gravitational assists.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Orbital Perturbations",
                description: "Learn about forces that can affect a spacecraft’s orbit, such as atmospheric drag, radiation pressure, and gravitational anomalies.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M104",
        name: "Spacecraft Systems Engineering",
        description: "Covers tthe integration of spacecraft subsystems, focusing on design, optimization, and meeting mission requirements.",
        course: "RS103",
        lessons: [
            {
                _id: "L301",
                name: "Introduction to Spacecraft Systems",
                description: "An overview of spacecraft systems and their components, including propulsion, power, thermal control, and communications.",
                module: "M104"
            },
            {
                _id: "L302",
                name: "Systems Integration and Testing",
                description: "Learn about the processes and methods for integrating various spacecraft systems and ensuring their functionality through testing.",
                module: "M104"
            },
            {
                _id: "L303",
                name: "Reliability and Risk Management",
                description: "Understand the principles of reliability engineering and risk management in the context of spacecraft design and mission planning.",
                module: "M104"
            }
        ]
    },
    {
        _id: "M101",
        name: "Introduction to Organic Chemistry",
        description: "Basic principles of organic chemistry and compound behavior.",
        course: "RS104",
        lessons: [
            {
                _id: "L101",
                name: "Introduction to Hydrocarbons",
                description: "Basics of hydrocarbons and their properties.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Functional Groups and Reactions",
                description: "Introduction to functional groups and common organic reactions.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Stereochemistry",
                description: "Study of stereochemistry and molecular structure.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Introduction to Molecular Structure and Bonding",
        description: "Covers the principles of molecular geometry, hybridization, and chemical bonding. Students will learn how atoms form molecules, the shapes they adopt, and how these factors influence reactivity and properties.",
        course: "RS104",
        lessons: [
            {
                _id: "L201",
                name: "Molecular Structure and Bonding",
                description: "Delve into the principles of molecular structure and bonding, exploring how atoms bond to form molecules and the implications of these interactions.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Atomic Structure",
                description: "Introduction to the structure of atoms, including protons, neutrons, electrons, and how they determine chemical properties.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Types of Chemical Bonds",
                description: "Examine the different types of chemical bonds, including ionic, covalent, and metallic bonds, and their characteristics.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Functional Groups",
        description: "Explore the various functional groups in organic chemistry, their properties, and their reactivity in chemical reactions.",
        course: "RS104",
        lessons: [
            {
                _id: "L301",
                name: "Introduction to Functional Groups",
                description: "An overview of functional groups, including definitions, classifications, and their importance in organic compounds.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Alcohols and Ethers",
                description: "Study the properties and reactions of alcohols and ethers, including their synthesis and applications in various fields.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Carboxylic Acids and Derivatives",
                description: "Learn about carboxylic acids, their derivatives, and their reactions, focusing on their significance in organic synthesis.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Introduction to Physical Chemistry",
        description: "The study of the physical properties and behavior of molecules.",
        course: "RS106",
        lessons: [
            {
                _id: "L101",
                name: "Thermodynamics",
                description: "Basic concepts of thermodynamics and energy transfer.",
                module: "M106"
            },
            {
                _id: "L102",
                name: "Kinetics and Reaction Rates",
                description: "Introduction to reaction rates and kinetics.",
                module: "M106"
            },
            {
                _id: "L103",
                name: "Quantum Chemistry",
                description: "Understanding molecular behavior through quantum mechanics.",
                module: "M106"
            }
        ]
    },
    {
        _id: "M102",
        name: "Thermodynamics",
        description: "Explore the principles of thermodynamics, focusing on energy transfer, the laws of thermodynamics, and their applications in various systems.",
        course: "RS106",
        lessons: [
            {
                _id: "L201",
                name: "Introduction to Thermodynamics",
                description: "Overview of thermodynamics, including its significance in science and engineering, and the key concepts of heat, work, and energy.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Thermodynamic Processes",
                description: "Study different thermodynamic processes, including isothermal, adiabatic, isobaric, and isochoric processes, and their applications.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Laws of Thermodynamics",
                description: "Examine the four laws of thermodynamics, their implications, and how they govern physical processes.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Kinetics",
        description: "Study the principles of kinetics, focusing on the motion of objects and the forces that affect their movement.",
        course: "RS106",
        lessons: [
            {
                _id: "L301",
                name: "Fundamentals of Kinetics",
                description: "Introduction to the basic concepts of kinetics, including velocity, acceleration, and the relationship between force and motion.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Newton's Laws of Motion",
                description: "Explore Newton's three laws of motion and their applications in analyzing the movement of objects.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Applications of Kinetics",
                description: "Examine real-world applications of kinetics, including projectile motion, circular motion, and the effects of friction.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Fundamentals of Aerodynamics",
        description: "Explore the principles of aerodynamics, focusing on the behavior of air as it interacts with solid bodies, including lift, drag, and airflow.",
        course: "RS107",
        lessons: [
            {
                _id: "L101",
                name: "Introduction to Aerodynamics",
                description: "An overview of aerodynamics, including the basic concepts of airflow, pressure, and the forces acting on an object in motion.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Lift and Drag Forces",
                description: "Understanding the concepts of lift and drag, and how they affect the performance of aircraft and other aerodynamic bodies.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Airflow Characteristics",
                description: "Examine the characteristics of airflow over different shapes and surfaces, including boundary layers and flow separation.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Elvish Languages",
        description: "Explore the rich and diverse languages of the Elvish cultures, focusing on their linguistic structures, histories, and cultural significance.",
        course: "RS107",
        lessons: [
            {
                _id: "L201",
                name: "Introduction to Elvish Languages",
                description: "An overview of the various Elvish languages, including Quenya and Sindarin, and their significance in mythology and literature.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Quenya Language Basics",
                description: "Learn the fundamentals of the Quenya language, including grammar, vocabulary, and pronunciation.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Sindarin Language Basics",
                description: "Introduction to Sindarin, covering its grammar, common phrases, and cultural context within Elvish lore.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Scripts and Writing Systems",
        description: "An exploration of various writing systems used throughout history, focusing on their development, structure, and cultural significance.",
        course: "RS107",
        lessons: [
            {
                _id: "L301",
                name: "History of Writing Systems",
                description: "An overview of the evolution of writing systems from ancient times to modern scripts, including cuneiform, hieroglyphics, and alphabets.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Alphabetic and Logographic Systems",
                description: "Examine the differences between alphabetic and logographic writing systems, with examples from various cultures.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Calligraphy and Artistic Scripts",
                description: "Study the art of calligraphy and explore different artistic scripts, focusing on their aesthetic value and cultural heritage.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Subsonic and Supersonic Flow",
        description: "Understanding subsonic and supersonic aerodynamic behaviors.",
        course: "RS108",
        lessons: [
            {
                _id: "L101",
                name: "Basics of Fluid Dynamics",
                description: "Introduction to fluid dynamics, including key concepts and equations governing fluid flow, such as Bernoulli's equation.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Characteristics of Subsonic Flow",
                description: "Understanding the properties of subsonic flow, including pressure changes, velocity profiles, and boundary layers.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Supersonic Flow Dynamics",
                description: "Exploration of supersonic flow phenomena, including shock waves, expansion fans, and the role of compressibility in fluid behavior.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Cultural Differences",
        description: "An exploration of the various cultural differences that exist around the world, including values, beliefs, communication styles, and social norms.",
        course: "RS108",
        lessons: [
            {
                _id: "L201",
                name: "Understanding Culture",
                description: "Introduction to the concept of culture, including definitions, components, and how culture shapes identity.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Communication Styles Across Cultures",
                description: "Examination of how different cultures communicate, including verbal and non-verbal communication styles and their implications in cross-cultural interactions.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Values and Beliefs in Different Cultures",
                description: "Analysis of how values and beliefs differ across cultures, and how these differences impact behavior, relationships, and decision-making.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M102",
        name: "Case Studies of Key Alliances",
        description: "An in-depth analysis of significant alliances in history and their impact on global politics, economics, and society.",
        course: "RS108",
        lessons: [
            {
                _id: "L201",
                name: "The Formation of NATO",
                description: "Study of the North Atlantic Treaty Organization's formation, its objectives, and its role in post-World War II geopolitics.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "The European Union: Integration and Challenges",
                description: "Examination of the European Union's formation, its integration process, and the challenges it faces, including economic disparities and political tensions.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Strategic Alliances in the Technology Sector",
                description: "Analysis of key strategic alliances in the technology sector, focusing on partnerships between major companies and their implications for innovation and competition.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M101",
        name: "Types of Magic",
        description: "An exploration of various magical systems, traditions, and their cultural significance across different societies.",
        course: "RS109",
        lessons: [
            {
                _id: "L101",
                name: "Elemental Magic",
                description: "Understanding the four classical elements (earth, air, fire, water) and their representation in magical practices.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Healing and White Magic",
                description: "Exploration of healing practices and the ethical considerations surrounding white magic in various cultures.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Dark Magic and Curses",
                description: "Investigating the nature of dark magic, curses, and their impact on individuals and communities.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Historical Development of Magic",
        description: "A study of the evolution of magical practices and beliefs throughout history, examining significant periods and cultures.",
        course: "RS109",
        lessons: [
            {
                _id: "L201",
                name: "Ancient Magic Practices",
                description: "Exploration of magical rituals and beliefs in ancient civilizations such as Egypt, Greece, and Mesopotamia.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Medieval and Renaissance Magic",
                description: "Understanding the role of magic in medieval society and its transformation during the Renaissance period.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Modern Magic and the Occult",
                description: "A look at the rise of modern magical movements, including Theosophy, Wicca, and contemporary practices.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Magic in Elvish Culture",
        description: "An exploration of the significance and practices of magic within various Elvish cultures, including their traditions, rituals, and beliefs.",
        course: "RS109",
        lessons: [
            {
                _id: "L301",
                name: "Elvish Spellcraft",
                description: "Study of the unique spells and magical practices used by Elves, focusing on their connection to nature.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Rituals and Ceremonies",
                description: "Examination of important magical rituals in Elvish culture, including seasonal celebrations and rites of passage.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Magic in Elvish Lore",
                description: "Understanding the role of magic in Elvish stories and myths, and its impact on their worldview and society.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Foundations of Democratic Education",
        description: "An examination of the principles, practices, and historical context of democratic education, emphasizing student engagement and social justice.",
        course: "RS110",
        lessons: [
            {
                _id: "L101",
                name: "History of Democratic Education",
                description: "Overview of the historical development of democratic education and its key figures and movements.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Principles of Democratic Education",
                description: "Exploration of the core principles of democratic education, including equity, participation, and critical thinking.",
                module: "M101"
            },
            {
                _id: "L303",
                name: "Implementing Democratic Practices",
                description: "Strategies for incorporating democratic practices into the classroom, promoting student voice and agency.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Critical Pedagogy",
        description: "An exploration of critical pedagogy, emphasizing the role of education in fostering social justice, equity, and critical consciousness among students.",
        course: "RS110",
        lessons: [
            {
                _id: "L201",
                name: "Foundations of Critical Pedagogy",
                description: "Introduction to the key concepts and theorists of critical pedagogy, including Paulo Freire and bell hooks.",
                module: "M101"
            },
            {
                _id: "L202",
                name: "Critical Consciousness",
                description: "Understanding the concept of critical consciousness and its importance in empowering students to question and challenge societal norms.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Practical Applications of Critical Pedagogy",
                description: "Strategies for implementing critical pedagogy in the classroom, focusing on dialogue, reflection, and collaborative learning.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Inclusivity and Equity in Education",
        description: "An in-depth examination of inclusivity and equity in educational settings, focusing on strategies to create an equitable learning environment for all students.",
        course: "RS110",
        lessons: [
            {
                _id: "L301",
                name: "Understanding Inclusivity",
                description: "Exploring the principles of inclusivity in education and its significance in promoting diversity and belonging in the classroom.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Equity vs. Equality in Education",
                description: "Differentiating between equity and equality, and discussing their implications for teaching practices and policy-making.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Strategies for Inclusive Teaching",
                description: "Developing practical strategies and teaching methods that foster an inclusive classroom environment for diverse learners.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Historical Context of Independence Movements",
        description: "An exploration of the key independence movements throughout history, examining their causes, key figures, and the sociopolitical contexts that led to the quest for independence.",
        course: "RS111",
        lessons: [
            {
                _id: "L101",
                name: "The Age of Revolutions",
                description: "Understanding the various revolutions that marked the late 18th and early 19th centuries and their impact on independence movements around the world.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Decolonization in the 20th Century",
                description: "Examining the processes of decolonization after World War II, focusing on key events, figures, and the legacy of colonialism.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Case Studies of Independence Movements",
                description: "Analyzing specific case studies of independence movements, such as those in India, Algeria, and the Americas, to understand the diverse strategies and outcomes.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Theories of Freedom and Autonomy",
        description: "An examination of various philosophical theories regarding freedom and autonomy, including their historical development and implications for individual and collective rights.",
        course: "RS111",
        lessons: [
            {
                _id: "L201",
                name: "Historical Perspectives on Freedom",
                description: "Exploring the evolution of the concept of freedom from ancient philosophical texts to modern political theory.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Key Philosophers and Their Theories",
                description: "Analyzing the contributions of key philosophers, such as John Stuart Mill and Immanuel Kant, to the understanding of autonomy and its ethical implications.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Freedom in Contemporary Society",
                description: "Discussing the relevance of freedom and autonomy theories in contemporary issues, such as civil rights, social justice, and personal identity.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Colonialism and Post-Colonial Thought",
        description: "An exploration of colonialism's historical impact and the evolution of post-colonial thought, examining key texts, themes, and critiques of colonial narratives.",
        course: "RS111",
        lessons: [
            {
                _id: "L301",
                name: "Historical Roots of Colonialism",
                description: "Investigating the origins and development of colonial practices, focusing on key events and figures in the colonial era.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Key Theorists of Post-Colonial Thought",
                description: "Analyzing the works of influential post-colonial theorists such as Edward Said, Homi K. Bhabha, and Gayatri Chakravorty Spivak, and their critiques of colonial narratives.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Contemporary Issues in Post-Colonial Studies",
                description: "Discussing the ongoing impact of colonialism in modern societies and examining contemporary movements and theories addressing post-colonial issues.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Educational Reform Movements",
        description: "An overview of significant educational reform movements throughout history, examining their goals, methods, and impacts on contemporary education.",
        course: "RS112",
        lessons: [
            {
                _id: "L101",
                name: "The Progressive Education Movement",
                description: "Exploring the principles and key figures of the progressive education movement, including John Dewey and Maria Montessori, and their influence on modern teaching practices.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "The Civil Rights Movement and Education",
                description: "Analyzing the role of the Civil Rights Movement in shaping educational policies and practices, focusing on key events like Brown v. Board of Education.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Contemporary Educational Reforms",
                description: "Discussing current trends in educational reform, including standards-based education, technology integration, and equitable access to education.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Pestalozzi’s Educational Philosophy",
        description: "An in-depth exploration of Johann Heinrich Pestalozzi's educational philosophy, focusing on his principles of education and their influence on modern pedagogical practices.",
        course: "RS112",
        lessons: [
            {
                _id: "L201",
                name: "Pestalozzi's Life and Influence",
                description: "An overview of Pestalozzi's life, his educational endeavors, and how his experiences shaped his educational philosophy.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "The Concept of 'Learning by Heart'",
                description: "Examining Pestalozzi's principle of 'learning by heart' and its implications for teaching methods and student engagement.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Pestalozzi’s Holistic Approach",
                description: "Discussing Pestalozzi’s holistic approach to education, emphasizing the development of the head, heart, and hands in learners.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "The Lancastrian System",
        description: "An examination of the Lancastrian System of education, focusing on its historical context, implementation, and impact on the educational landscape.",
        course: "RS112",
        lessons: [
            {
                _id: "L301",
                name: "Historical Background of the Lancastrian System",
                description: "Exploring the origins of the Lancastrian System, its creator Joseph Lancaster, and its purpose in addressing educational access.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Mechanics of the Lancastrian System",
                description: "Analyzing the operational mechanics of the Lancastrian System, including the role of monitors and peer teaching.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Impact on Modern Education",
                description: "Assessing the influence of the Lancastrian System on contemporary educational practices and its legacy in teaching methods.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Biblical Ethics",
        description: "A study of ethical principles found within the Bible, exploring their application to moral decision-making and contemporary issues.",
        course: "RS113",
        lessons: [
            {
                _id: "L101",
                name: "Introduction to Biblical Ethics",
                description: "An overview of the foundations of biblical ethics, including key concepts, historical context, and scriptural references.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Major Ethical Themes in the Bible",
                description: "Exploring major themes such as justice, mercy, love, and sin as presented in various biblical texts.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Application of Biblical Ethics in Modern Society",
                description: "Discussing how biblical ethical principles can be applied to contemporary moral dilemmas and social issues.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Historical Development of Christian Ethics",
        description: "A comprehensive study of the evolution of Christian ethical thought from the early church to contemporary issues, examining key figures and movements.",
        course: "RS113",
        lessons: [
            {
                _id: "L201",
                name: "Early Church Ethics",
                description: "Exploration of ethical teachings and practices in the early Christian community, including the influence of Greco-Roman philosophy.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Medieval Christian Ethics",
                description: "Analysis of the development of Christian ethics during the medieval period, focusing on figures such as Augustine and Aquinas.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Modern Christian Ethical Thought",
                description: "Investigating contemporary Christian ethical movements and the impact of Enlightenment philosophy on Christian ethics.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Theological Foundations",
        description: "An exploration of the fundamental concepts and beliefs that form the basis of Christian theology, including scripture, tradition, and reason.",
        course: "RS113",
        lessons: [
            {
                _id: "L301",
                name: "The Authority of Scripture",
                description: "Examination of the role of the Bible in Christian theology, including its historical context and interpretation.",
                module: "M103"
            },
            {
                _id: "L301",
                name: "Tradition and Reason in Theology",
                description: "Analysis of how church tradition and rational thought contribute to the development of theological beliefs.",
                module: "M103"
            },
            {
                _id: "L301",
                name: "The Doctrine of God",
                description: "Study of the key attributes of God and their implications for Christian faith and practice.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Historical Context of Early Christianity",
        description: "An exploration of the historical, social, and cultural contexts in which early Christianity emerged and developed.",
        course: "RS114",
        lessons: [
            {
                _id: "L101",
                name: "The Roman Empire and Early Christianity",
                description: "Examination of the political and cultural landscape of the Roman Empire during the time of early Christian development.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Judaism and the Roots of Christianity",
                description: "Analysis of the Jewish roots of Christianity and the influence of Second Temple Judaism on early Christian thought.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Persecution and Growth of the Church",
                description: "Study of the early persecutions faced by Christians and how these events contributed to the growth and spread of the faith.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Life and Teachings of Jesus",
        description: "An in-depth study of the life, ministry, and teachings of Jesus Christ as presented in the New Testament.",
        course: "RS114",
        lessons: [
            {
                _id: "L201",
                name: "Historical Background of Jesus' Life",
                description: "Overview of the historical and cultural context of Judea during the time of Jesus.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Parables and Teachings of Jesus",
                description: "Exploration of the parables taught by Jesus and their significance in His overall message.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "The Passion and Resurrection",
                description: "Study of the events leading up to the crucifixion of Jesus, His resurrection, and the implications for Christianity.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "The Acts of the Apostles",
        description: "An exploration of the early Christian church's formation, growth, and the spread of the Gospel as narrated in the Acts of the Apostles.",
        course: "RS114",
        lessons: [
            {
                _id: "L301",
                name: "The Ascension and Pentecost",
                description: "Study of the events surrounding Jesus' ascension and the outpouring of the Holy Spirit at Pentecost.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "The Early Church Community",
                description: "Examination of the practices, challenges, and growth of the early Christian community in Jerusalem.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Paul's Missionary Journeys",
                description: "Analysis of the missionary journeys of the Apostle Paul and the spread of Christianity throughout the Roman Empire.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Biblical Foundations of Leadership",
        description: "An examination of leadership principles and practices as derived from biblical texts, emphasizing servant leadership and ethical decision-making.",
        course: "RS115",
        lessons: [
            {
                _id: "L101",
                name: "Servant Leadership in the Bible",
                description: "Exploration of the concept of servant leadership as exemplified by Jesus and other biblical figures.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Wisdom and Decision-Making",
                description: "Study of wisdom literature in the Bible and its implications for ethical leadership and decision-making.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Leadership Qualities of Biblical Figures",
                description: "Analysis of the leadership qualities demonstrated by various biblical leaders, such as Moses, David, and Paul.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Servant Leadership",
        description: "An exploration of the principles and practices of servant leadership, emphasizing the importance of serving others and fostering community.",
        course: "RS115",
        lessons: [
            {
                _id: "L201",
                name: "Introduction to Servant Leadership",
                description: "Overview of the concept of servant leadership, its origins, and key characteristics.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "The Role of Empathy in Leadership",
                description: "Understanding how empathy influences leadership effectiveness and fosters a supportive environment.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Building Community Through Service",
                description: "Exploration of strategies for creating community and collaboration through servant leadership practices.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "The Role of Spiritual Gifts",
        description: "An examination of spiritual gifts within the context of Christian leadership and community, focusing on their significance and practical application.",
        course: "RS115",
        lessons: [
            {
                _id: "L301",
                name: "Understanding Spiritual Gifts",
                description: "Introduction to the various spiritual gifts mentioned in scripture, their definitions, and their purpose.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Identifying Your Spiritual Gifts",
                description: "Methods and tools for individuals to discover and assess their spiritual gifts.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Utilizing Spiritual Gifts in Community",
                description: "Strategies for effectively using spiritual gifts within church and community settings to serve others.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Historical Development of Sufism",
        description: "A comprehensive exploration of the origins, evolution, and key figures in Sufism, highlighting its impact on Islamic thought and practice.",
        course: "RS116",
        lessons: [
            {
                _id: "L101",
                name: "Origins of Sufism",
                description: "Investigate the early roots of Sufism, including its mystical practices and philosophical foundations.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Key Figures in Sufism",
                description: "Study the lives and teachings of significant Sufi masters and their contributions to the development of the tradition.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Sufism and Islamic Society",
                description: "Analyze the role of Sufism in Islamic culture, including its influence on art, poetry, and social movements.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Core Concepts of Sufi Philosophy",
        description: "An in-depth examination of the essential philosophical ideas in Sufism, including love, unity, and the nature of God.",
        course: "RS116",
        lessons: [
            {
                _id: "L201",
                name: "The Concept of Divine Love",
                description: "Explore the significance of divine love in Sufi thought and its role in the pursuit of spiritual enlightenment.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Unity of Being (Wahdat al-Wujud)",
                description: "Discuss the philosophical notion of the unity of existence and how it influences Sufi practices and beliefs.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Self and the Divine",
                description: "Analyze the relationship between the self and the divine, focusing on concepts of self-realization and spiritual awakening.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Sufi Practices and Rituals",
        description: "An exploration of the various practices and rituals in Sufism, emphasizing their spiritual significance and communal aspects.",
        course: "RS116",
        lessons: [
            {
                _id: "L301",
                name: "The Whirling Dervishes",
                description: "Examine the practice of whirling as a form of meditation and its significance in Sufi spirituality.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Sama and Qawwali",
                description: "Explore the musical traditions of Sama and Qawwali as means of spiritual expression and connection with the divine.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Zikr (Remembrance of God)",
                description: "Discuss the practice of Zikr, its methods, and its role in cultivating a deep spiritual connection with God.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Sources of Islamic Ethics",
        description: "An examination of the primary sources of Islamic ethics, including the Qur'an, Hadith, and the role of reason in ethical decision-making.",
        course: "RS117",
        lessons: [
            {
                _id: "L101",
                name: "The Qur'an as a Moral Guide",
                description: "Explore how the Qur'an provides foundational ethical principles and guidelines for personal and communal conduct.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Hadith and the Example of the Prophet",
                description: "Discuss the significance of Hadith literature and how the actions and sayings of the Prophet Muhammad inform ethical behavior.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Reason and Ethics in Islam",
                description: "Analyze the role of reason and rationality in interpreting ethical principles within the Islamic tradition.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Moral Philosophy in Islam",
        description: "An exploration of moral philosophy within the Islamic tradition, focusing on the key ethical theories and principles that guide moral decision-making.",
        course: "RS117",
        lessons: [
            {
                _id: "L201",
                name: "Ethical Theories in Islamic Thought",
                description: "Examine major ethical theories in Islamic philosophy, including virtue ethics, deontological ethics, and consequentialism.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "The Concept of Justice in Islam",
                description: "Discuss the central role of justice in Islamic moral philosophy and its implications for individual and societal ethics.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "The Role of Intention (Niyyah) in Ethics",
                description: "Analyze how intention shapes moral actions in Islamic thought and its significance in evaluating ethical behavior.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Islamic Legal and Ethical Frameworks",
        description: "An overview of the legal and ethical frameworks in Islam, examining the sources, principles, and applications of Islamic law (Sharia) and ethics.",
        course: "RS117",
        lessons: [
            {
                _id: "L301",
                name: "Sources of Islamic Law",
                description: "Explore the primary sources of Islamic law, including the Quran, Hadith, consensus (Ijma), and analogical reasoning (Qiyas).",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Principles of Sharia",
                description: "Discuss the fundamental principles of Sharia and its role in guiding ethical and legal decision-making in the Muslim community.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Contemporary Issues in Islamic Law",
                description: "Analyze contemporary ethical and legal challenges within the context of Islamic frameworks, including debates on gender, bioethics, and human rights.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Historical Development of Islamic Esotericism",
        description: "An exploration of the historical evolution of Islamic esotericism (Irfan), focusing on its key figures, texts, and philosophical underpinnings.",
        course: "RS118",
        lessons: [
            {
                _id: "L101",
                name: "Origins of Islamic Esotericism",
                description: "Investigate the early influences of Gnosticism, Neoplatonism, and Sufi thought on the development of esoteric Islamic beliefs.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Key Figures in Islamic Esotericism",
                description: "Study the contributions of notable esoteric thinkers, including Ibn Arabi, Al-Ghazali, and Rumi, and their impact on Islamic philosophy.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Modern Perspectives on Esotericism",
                description: "Examine contemporary interpretations and movements within Islamic esotericism, addressing its relevance in today's spiritual landscape.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Core Concepts of Esoteric Knowledge",
        description: "An in-depth examination of the fundamental principles and ideas that define esoteric knowledge across various traditions.",
        course: "RS118",
        lessons: [
            {
                _id: "L201",
                name: "Nature of Esoteric Knowledge",
                description: "Explore the definition of esoteric knowledge and its distinction from exoteric teachings in different philosophical and religious contexts.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Symbolism and Language",
                description: "Analyze the role of symbolism, metaphors, and specialized language in conveying esoteric knowledge.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Initiation and Spiritual Progress",
                description: "Discuss the processes of initiation and the stages of spiritual growth within esoteric traditions.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Sufism as Esoteric Practice",
        description: "An exploration of Sufism's unique position as a mystical and esoteric path within Islam, focusing on its practices, beliefs, and teachings.",
        course: "RS118",
        lessons: [
            {
                _id: "L301",
                name: "The Essence of Sufism",
                description: "Investigate the foundational concepts of Sufism and its emphasis on inner purity and spiritual connection with the Divine.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Mystical Practices in Sufism",
                description: "Examine the various practices such as dhikr (remembrance), meditation, and poetry that characterize Sufi esoteric practices.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Sufi Orders and Lineages",
                description: "Explore the major Sufi orders, their teachings, and the significance of lineage in transmitting esoteric knowledge.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Philosophical Foundations",
        description: "An exploration of the fundamental philosophical concepts that underpin various schools of thought, emphasizing their historical development and relevance to contemporary issues.",
        course: "RS119",
        lessons: [
            {
                _id: "L101",
                name: "Introduction to Philosophy",
                description: "An overview of the main branches of philosophy, including metaphysics, epistemology, ethics, and aesthetics.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Historical Philosophers and Their Impact",
                description: "Study the contributions of key philosophers throughout history, such as Plato, Aristotle, Kant, and Nietzsche, and their influence on modern thought.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Philosophy and Contemporary Issues",
                description: "Examine how philosophical foundations apply to current debates in ethics, politics, and science.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Traditional Agricultural Practices",
        description: "An examination of traditional agricultural methods and techniques, their historical significance, and their impact on modern agriculture and sustainability.",
        course: "RS119",
        lessons: [
            {
                _id: "L201",
                name: "History of Traditional Agriculture",
                description: "Explore the evolution of agricultural practices from ancient civilizations to present day, highlighting key innovations and methods.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Indigenous Farming Techniques",
                description: "Study indigenous farming techniques, their ecological significance, and how they contribute to sustainable food systems.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Traditional Crop Rotation and Biodiversity",
                description: "Understand the principles of crop rotation, companion planting, and biodiversity in traditional farming and their role in soil health.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Water Management Systems",
        description: "An exploration of water management systems, their historical development, engineering principles, and their importance in agriculture and urban planning.",
        course: "RS119",
        lessons: [
            {
                _id: "L301",
                name: "History of Water Management",
                description: "A study of ancient and modern water management practices, including irrigation systems, canals, and reservoirs.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Irrigation Techniques",
                description: "An overview of various irrigation techniques, including surface, drip, and sprinkler irrigation, and their applications in agriculture.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Sustainable Water Management",
                description: "Understanding the principles of sustainable water management, including conservation, watershed management, and the impact of climate change.",
                module: "M103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Mythical Figures and Their Leadership Qualities",
        description: "An exploration of various mythical figures from different cultures and their leadership qualities, examining how these attributes can be applied in modern leadership contexts.",
        course: "RS120",
        lessons: [
            {
                _id: "L101",
                name: "Heroes of Mythology",
                description: "An analysis of heroic figures in mythology, such as Hercules and Odysseus, and the leadership qualities they embody.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "Gods and Goddesses as Leaders",
                description: "Exploring the leadership traits of gods and goddesses from various mythologies, including Zeus, Athena, and Thor, and their relevance to contemporary leadership.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Lessons from Folklore",
                description: "Examining mythical stories and folklore to extract lessons on leadership, teamwork, and resilience from figures like King Arthur and Robin Hood.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "The Role of Fate and Destiny",
        description: "An examination of the concepts of fate and destiny across various cultures and philosophies, discussing their implications on human agency and decision-making.",
        course: "RS120",
        lessons: [
            {
                _id: "L201",
                name: "Mythological Perspectives on Fate",
                description: "Exploring how different mythologies conceptualize fate, including the Fates of Greek mythology and the Norns of Norse tradition.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Philosophical Views on Destiny",
                description: "Analyzing philosophical theories regarding destiny, including determinism and free will, and their implications for moral responsibility.",
                module: "M102"
            },
            {
                _id: "L203",
                name: "Cultural Interpretations of Fate",
                description: "Investigating how various cultures interpret fate and destiny, including Eastern philosophies like Taoism and Hinduism, and their impact on life choices.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Virtues in Chinese Leadership",
        description: "An exploration of the key virtues that shape leadership styles in Chinese culture, emphasizing Confucian principles and their application in modern contexts.",
        course: "RS120",
        lessons: [
            {
                _id: "L301",
                name: "Confucian Values and Leadership",
                description: "Examining the role of Confucian virtues such as Ren (benevolence) and Li (propriety) in shaping effective leadership in Chinese history.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Moral Character in Chinese Leadership",
                description: "Understanding the importance of moral character and integrity in Chinese leaders, and how these traits influence public trust and governance.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Virtues in Contemporary Chinese Leadership",
                description: "Analyzing how traditional virtues are applied in modern Chinese leadership practices, including their relevance in business and politics today.",
                module: "103"
            }
        ]
    },
    {
        _id: "M101",
        name: "Historical Overview of Hydraulic Engineering",
        description: "A comprehensive exploration of the evolution of hydraulic engineering, covering ancient techniques, major advancements, and the impact on modern engineering practices.",
        course: "RS121",
        lessons: [
            {
                _id: "L101",
                name: "Ancient Hydraulic Systems",
                description: "Study of early hydraulic engineering practices, including aqueducts, irrigation systems, and water management in ancient civilizations.",
                module: "M101"
            },
            {
                _id: "L102",
                name: "The Renaissance and Innovations",
                description: "Examination of the significant advancements in hydraulic engineering during the Renaissance, including notable figures and their contributions.",
                module: "M101"
            },
            {
                _id: "L103",
                name: "Modern Hydraulic Engineering",
                description: "Analysis of contemporary hydraulic engineering practices, technologies, and their applications in urban development and environmental management.",
                module: "M101"
            }
        ]
    },
    {
        _id: "M102",
        name: "Water Supply Systems",
        description: "An in-depth study of the design, operation, and management of water supply systems, focusing on sources, treatment, and distribution processes.",
        course: "RS121",
        lessons: [
            {
                _id: "L201",
                name: "Sources of Water Supply",
                description: "Exploration of various water sources, including surface water, groundwater, and alternative sources, along with their advantages and challenges.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Water Treatment Processes",
                description: "Overview of the processes involved in treating water to meet health and safety standards, including filtration, disinfection, and purification.",
                module: "M102"
            },
            {
                _id: "L202",
                name: "Distribution Systems",
                description: "Analysis of the components and design of water distribution systems, including pipes, pumps, and storage facilities, and their importance in ensuring reliable water delivery.",
                module: "M102"
            }
        ]
    },
    {
        _id: "M103",
        name: "Irrigation Techniques",
        description: "An exploration of various irrigation methods, their principles, applications, and effectiveness in agriculture.",
        course: "RS121",
        lessons: [
            {
                _id: "L301",
                name: "Surface Irrigation",
                description: "Introduction to surface irrigation methods, including furrow, basin, and flood irrigation, and their advantages and disadvantages.",
                module: "M103"
            },
            {
                _id: "L302",
                name: "Drip Irrigation",
                description: "Understanding drip irrigation systems, their design, components, and how they improve water efficiency and crop yield.",
                module: "M103"
            },
            {
                _id: "L303",
                name: "Sprinkler Irrigation",
                description: "Overview of sprinkler irrigation techniques, including stationary and mobile systems, and their applications in different agricultural contexts.",
                module: "M103"
            }
        ]
    },
    {}
];