const data = {
    animals: [
        {
            name: "African Lion",
            category: "animal",
            life: 15,
            diet: "Carnivore",
            habitat: "Savannah",
            description:
                "The king of the jungle, known for its magnificent mane and powerful roar. Lives in pride structures and is an apex predator.",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg",
            imageAlt: "Male African Lion with full mane",
        },
        {
            name: "Arctic Fox",
            category: "animal",
            life: 12,
            diet: "Omnivore",
            habitat: "Tundra",
            description:
                "Changes fur color seasonally - white in winter and brown in summer. Highly adapted to cold climates with furry soles.",
            image: "https://imgcdn.stablediffusionweb.com/2024/3/8/0b921bb7-5080-4eca-a425-e27a6e2b3bcb.jpg",
            imageAlt: "White Arctic Fox in snow",
        },
        {
            name: "Red Panda",
            category: "animal",
            life: 14,
            diet: "Herbivore",
            habitat: "Himalayan forests",
            description:
                "Not actually related to giant pandas, these adorable creatures are expert climbers and mainly eat bamboo.",
            image: "https://cdn.britannica.com/19/195219-138-0E06B980/red-panda.jpg",
            imageAlt: "Red Panda sitting on tree branch",
        },
        {
            name: "Kangaroo",
            category: "animal",
            life: 22,
            diet: "Herbivore",
            habitat: "Australian outback",
            description:
                "Marsupial known for powerful legs and carrying young in pouch. Can jump up to 25 feet in a single bound.",
            image: "https://cdn.mos.cms.futurecdn.net/ETb2xLjvc62eb7PPLspSsU-1200-80.jpg",
            imageAlt: "Kangaroo standing in Australian outback",
        },
        {
            name: "Sloth",
            category: "animal",
            life: 20,
            diet: "Herbivore",
            habitat: "Rainforest",
            description:
                "Known for extremely slow movement and spending most of their lives hanging upside down in trees.",
            image: "https://www.promegaconnections.com/wp-content/uploads/2021/10/63985762-Sloth-Day-2-1024x512-1.jpg",
            imageAlt: "Three-toed sloth hanging from tree",
        },
        {
            name: "Elephant",
            category: "animal",
            life: 70,
            diet: "Herbivore",
            habitat: "Savannah and forests",
            description:
                "Largest land mammal, known for intelligence and complex social structures. Has remarkable memory and problem-solving abilities.",
            image: "https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg",
            imageAlt: "African Elephant with tusks",
        },
        {
            name: "Polar Bear",
            category: "animal",
            life: 25,
            diet: "Carnivore",
            habitat: "Arctic",
            description:
                "Largest land carnivore, perfectly adapted for Arctic life with thick blubber and water-repellent fur.",
            image: "https://bloximages.newyork1.vip.townnews.com/valpotorch.com/content/tncms/assets/v3/editorial/3/4b/34b39260-c783-11ec-9097-f3d860fdf9c7/626b82e91b1c1.image.jpg",
            imageAlt: "Polar Bear on ice",
        },
        {
            name: "Giraffe",
            category: "animal",
            life: 25,
            diet: "Herbivore",
            habitat: "Savannah",
            description:
                "Tallest land animal, known for extremely long neck and distinctive spotted pattern. Each pattern is unique like fingerprints.",
            image: "https://www.masaimara.travel/images/masai-giraffe-masai-mara-kenya.jpg",
            imageAlt: "Giraffe reaching for tree leaves",
        },
        {
            name: "Red Fox",
            category: "animal",
            life: 8,
            diet: "Omnivore",
            habitat: "Forests and urban areas",
            description:
                "Highly adaptable animal known for its intelligence and beautiful red fur. Can be found in various habitats worldwide.",
            image: "https://static1.squarespace.com/static/569ec99b841abaccb7c7e74c/56ce9522b09f953e4e7b3dd7/64af131baa980a3163c7f839/1692111972669/Red+Fox_Ray+Hennessy_2017-11-20.jpg",
            imageAlt: "Red Fox in forest setting",
        },
        {
            name: "Koala",
            category: "animal",
            life: 15,
            diet: "Herbivore",
            habitat: "Australian eucalyptus forests",
            description:
                "Marsupial that specializes in eating eucalyptus leaves. Sleeps up to 22 hours per day due to low-energy diet.",
            image: "https://kids.earth.org/wp-content/uploads/2022/04/Untitled-1024-%C3%97-768px-2.jpg",
            imageAlt: "Koala in eucalyptus tree",
        },
    ],
    fishes: [
        {
            name: "Clownfish",
            category: "fish",
            life: 6,
            diet: "Omnivore",
            habitat: "Coral reefs",
            description:
                "Lives in symbiotic relationship with sea anemones. Made famous by Finding Nemo movie.",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg",
            imageAlt: "Clownfish swimming near anemone",
        },
        {
            name: "Great White Shark",
            category: "fish",
            life: 70,
            diet: "Carnivore",
            habitat: "Ocean waters worldwide",
            description:
                "Largest predatory fish, known for powerful jaws and hunting ability. Can detect blood from great distances.",
            image: "https://www.usatoday.com/gcdn/presto/2022/03/24/USAT/fe333d8d-ef90-429c-9474-1a22c2d8bf3c-SHARK_FRIENDS_ADOBE_.jpg",
            imageAlt: "Great White Shark swimming",
        },
        {
            name: "Blue Tang",
            category: "fish",
            life: 20,
            diet: "Herbivore",
            habitat: "Coral reefs",
            description:
                "Known for brilliant blue coloring and yellow tail. Helps keep reefs healthy by eating algae.",
            image: "https://aquariumnetwork.com/wp-content/uploads/2016/01/beautiful-fish-5.jpg",
            imageAlt: "Blue Tang swimming in coral reef",
        },
        {
            name: "Seahorse",
            category: "fish",
            life: 4,
            diet: "Carnivore",
            habitat: "Shallow tropical waters",
            description:
                "Unique fish known for male pregnancy. Uses tail to anchor itself to coral or seaweed.",
            image: "https://cdn.shopify.com/s/files/1/0016/6959/5189/files/sea-horse-swimming-hippocampus_1024x1024.jpg",
            imageAlt: "Seahorse attached to coral",
        },
        {
            name: "Electric Eel",
            category: "fish",
            life: 15,
            diet: "Carnivore",
            habitat: "South American rivers",
            description:
                "Can generate electric charges up to 860 volts to stun prey and defend itself.",
            image: "https://miro.medium.com/v2/resize:fit:1400/1*k8x5Uye28cTfpqayGwi1mQ.png",
            imageAlt: "Electric Eel in water",
        },
        {
            name: "Manta Ray",
            category: "fish",
            life: 25,
            diet: "Plankton",
            habitat: "Tropical ocean waters",
            description:
                "Largest ray species, known for intelligence and graceful swimming. Filter feeds on plankton.",
            image: "https://mantarayadvocates.com/wp-content/uploads/2024/03/spotted-eagle-ray-a-common-type-of-ray.jpeg",
            imageAlt: "Manta Ray swimming in ocean",
        },
        {
            name: "Anglerfish",
            category: "fish",
            life: 8,
            diet: "Carnivore",
            habitat: "Deep ocean",
            description:
                "Uses bioluminescent lure to attract prey in the dark depths of the ocean.",
            image: "https://i.ytimg.com/vi/TmwBE8VkATw/sddefault.jpg",
            imageAlt: "Deep sea Anglerfish",
        },
        {
            name: "Lionfish",
            category: "fish",
            life: 10,
            diet: "Carnivore",
            habitat: "Coral reefs",
            description:
                "Beautiful but venomous fish with distinctive striped pattern and fan-like fins.",
            image: "https://captainhooks.com/wp-content/uploads/2024/07/lionfish-florida-keys-invasive.webp",
            imageAlt: "Lionfish swimming with spread fins",
        },
        {
            name: "Moray Eel",
            category: "fish",
            life: 30,
            diet: "Carnivore",
            habitat: "Coral reefs",
            description:
                "Known for powerful jaws and hiding in reef crevices. Has second set of jaws in throat.",
            image: "https://d1qf26eatmkhar.cloudfront.net/wp-content/uploads/2014/04/2014_Apr12_moray-eels-3.jpg",
            imageAlt: "Moray Eel peering from reef",
        },
        {
            name: "Flying Fish",
            category: "fish",
            life: 5,
            diet: "Plankton",
            habitat: "Tropical and temperate waters",
            description:
                "Can glide above water for up to 200 meters using wing-like pectoral fins.",
            image: "https://oceanconservancy.org/wp-content/uploads/2021/11/51603365444_f566a3fbcb_h.jpg",
            imageAlt: "Flying Fish gliding above water",
        },
    ],
    insects: [
        {
            name: "Monarch Butterfly",
            category: "insect",
            life: 1,
            diet: "Nectar",
            habitat: "North America",
            description:
                "Known for incredible annual migration and distinctive orange and black wings.",
            image: "https://www.unc.edu/wp-content/uploads/2023/07/monarch-hero-2.jpg",
            imageAlt: "Monarch Butterfly on flower",
        },
        {
            name: "Praying Mantis",
            category: "insect",
            life: 1,
            diet: "Carnivore",
            habitat: "Tropical and temperate regions",
            description:
                "Expert predator with remarkable camouflage ability. Can rotate head 180 degrees.",
            image: "https://i.natgeofe.com/k/b77d474b-0a62-46d8-9108-1e359b2d1f96/praying-mantis-wings-closeup_3x2.jpg",
            imageAlt: "Praying Mantis on leaf",
        },
        {
            name: "Atlas Moth",
            category: "insect",
            life: 1,
            diet: "Does not eat as adult",
            habitat: "Tropical forests of Asia",
            description:
                "One of the largest moths with wingspan up to 12 inches. Adults live only a few days.",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Attacus_atlas_qtl1.jpg",
            imageAlt: "Atlas Moth with spread wings",
        },
        {
            name: "Hercules Beetle",
            category: "insect",
            life: 1,
            diet: "Plant matter",
            habitat: "Rainforests",
            description:
                "One of the largest beetles, males have distinctive horns used in fighting.",
            image: "https://static.wikia.nocookie.net/wildkratts/images/7/70/Hercules_beetle.PNG",
            imageAlt: "Hercules Beetle on tree",
        },
        {
            name: "Giant Walking Stick",
            category: "insect",
            life: 2,
            diet: "Herbivore",
            habitat: "Tropical forests",
            description:
                "Masters of camouflage that perfectly mimic twigs and branches.",
            image: "https://images.squarespace-cdn.com/content/v1/5ced61149faae90001b35306/1590508288121-M5W0FZKN1ZTZZZ2WL2PH/MVIMG_20200511_134129.jpg",
            imageAlt: "Giant Walking Stick on branch",
        },
        {
            name: "Blue Morpho Butterfly",
            category: "insect",
            life: 1,
            diet: "Nectar",
            habitat: "Tropical rainforests",
            description:
                "Known for brilliant blue wings that use light diffraction to create color.",
            image: "https://images.squarespace-cdn.com/content/v1/59037298b8a79b4dfd465e24/1516293980303-8T383ZDMBOKD2YEZXUH9/Gordon.jpg",
            imageAlt: "Blue Morpho Butterfly in flight",
        },
        {
            name: "Emperor Scorpion",
            category: "insect",
            life: 8,
            diet: "Carnivore",
            habitat: "African rainforests",
            description:
                "One of the largest scorpions, known for its impressive size and UV fluorescence.",
            image: "https://media.sciencephoto.com/image/c0134402/800wm",
            imageAlt: "Emperor Scorpion on ground",
        },
        {
            name: "Giant Weta",
            category: "insect",
            life: 2,
            diet: "Herbivore",
            habitat: "New Zealand",
            description:
                "One of the heaviest insects in the world, can weigh as much as a small bird.",
            image: "http://otagomuseum.nz/assets/Uploads/EDDIE.jpg",
            imageAlt: "Giant Weta on tree bark",
        },
        {
            name: "Goliath Beetle",
            category: "insect",
            life: 1,
            diet: "Plant matter",
            habitat: "African tropical forests",
            description:
                "Among the largest insects by weight, known for metallic coloring.",
            image: "https://www.discoverafrica.com/wp-content/uploads/2023/10/Goliath-Beetle-1200x800.jpg",
            imageAlt: "Goliath Beetle on log",
        },
        {
            name: "Luna Moth",
            category: "insect",
            life: 1,
            diet: "Does not eat as adult",
            habitat: "North American forests",
            description:
                "Large, beautiful green moth with long tails on hindwings. Adults live only about a week.",
            image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2x1bmEtbW90aC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==",
            imageAlt: "Luna Moth with spread wings",
        },
    ],
};

const mongoose = require("mongoose");
const Item = require("./models/Item");

async function seedDatabase() {
    try {       
        await Item.deleteMany({});

        // Combine all items into one array
        const allItems = [...data.animals, ...data.fishes, ...data.insects];

        // Insert all items
        await Item.insertMany(allItems);

        console.log("Database seeded successfully!");
    } catch (error) {
        console.error("Error seeding database:", error);
    }
}

// If using MongoDB with Mongoose
mongoose
    .connect("mongodb://127.0.0.1:27017/aniwiki")
    .then(() => {
        console.log("Connected to MongoDB...");
        return seedDatabase();
    })
    .then(() => {
        console.log("Seed complete, disconnecting...");
        mongoose.disconnect();
    })
    .catch((err) => {
        console.error("Error:", err);
        mongoose.disconnect();
    });

// Export the data for potential use in other files
module.exports = data;
