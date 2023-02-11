const projects = [
    {
        title: "Super Cool Project",
        description: "Sed tempus ut lacus ut scelerisque. Suspendisse sollicitudin nibh erat, id facilisis felis accumsan nec."
    },
    {
        title: "Less Cool Proiect",
        description: "Nullam condimentum ipsum ut lectus vehicula consectetur. Quisque sed dolor tincidunt, consectetur sapien et, facilisis dolor. Duis sem purus, dignissim ut sapien in, varius pellentesque lacus."
    },
    {
        title: "Impossible App",
        description: "In hac habitasse platea dictumst. Vivamus dictum rutrum arcu, a placerat velit sagittis id."
    },
    {
        title: "Easy Peasy App",
        description: "Etiam cursus eros ac efficitur fringilla. Vestibulum dignissim urna get accumsan aliquam. Curabitur dignissim nisi in tortor commodo, ac bibendum magna tincidunt."
    },
    {
        title: "Ad Blocker",
        description: "Quisque get rutrum nisl. Nam augue justo, cursus vitae metus vel, pharetra hendrerit felis. Aliquam sed malesuada eros."
    },
    {
        title: "Money Maker",
        description: "Present convallis, libero quis congue elementum, nunc ante faucibus sapien, ac scelerisque tortor purus sit amet ex. Pellentesque mollis nec sem vel aliquam."
    }
]

const trendingUsers = [
    {
        tag: "@tegan",
        quote: "World Peace Builder",
        imgSrc: "./assets/red-dog.jpg"
    },
    {
        tag: "@morgan",
        quote: "Super Cool Project",
        imgSrc: "./assets/cute-cat.jpg"
    },
    {
        tag: "@kendal",
        quote: "Life Changing App",
        imgSrc: "./assets/spider-man.jpg"
    },
    {
        tag: "@alex",
        quote: "No Traffic Maker",
        imgSrc: "./assets/pingu.jpg"
    },
]

const announcements = [
    {
        title: "Site Maintenance",
        description: "Vestibulum condimentum tellus lacus, in accumsan elit maximus ac. Done hendrerit sodales conque."
    },
    {
        title: "Community Share Day",
        description: "Nam vel lectus tincidunt, rutrum nulla eu, ornare libero. Aliquam dictum accumsan porttitor."
    },
    {
        title: "Updated Privacy Policy",
        description: "Phasellus efficitur nisi get elit consectetur, get condimentum ante auctor. Cras fringilla sagittis sem in mattis."
    },
]

const favoriteSVGstr = `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24">
<title>favorite</title>
<path
    d="M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M17 14V17H14V19H17V22H19V19H22V17H19V14H17Z" />
</svg>`

const followSVGstr = `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24">
<title>follow</title>
<path
    d="M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z" />
</svg>`

const shareSVGstr = `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24">
<title>share</title>
<path
    d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z" />
</svg>`

function loadCards() {
    createProjectCards();
    createTrendingUserCard();
    createAnnouncementCard();
}

function createProjectCards() {
    const projectCards = document.getElementById("project-cards");

    projects.forEach(project => {
        const card = createProjectCard(project.title, project.description)
        projectCards.appendChild(card);
    });
}  

function createTrendingUserCard() {
    const trendingSection = document.getElementById("trending-section");
    const trendingUserCard = document.createElement("div");
    trendingUserCard.className = "trending-card";

    trendingUsers.forEach(user => {
        const { tag, quote, imgSrc } = user;
        const trendingUser = createTrendingUser(tag, quote, imgSrc)
        trendingUserCard.appendChild(trendingUser);
    });

    trendingSection.appendChild(trendingUserCard);
}  

function createAnnouncementCard() {
    const announcementsSection = document.getElementById("announcements-section");
    const announcementCard = document.createElement("div");
    announcementCard.className = "announcements-card";

    announcements.forEach(announcement => {
        const { title, description } = announcement;
        const announcementEntry = createAnnouncementeEntry(title, description)
        announcementCard.appendChild(announcementEntry);
    });

    announcementsSection.appendChild(announcementCard);
}

function createProjectCard(title, description) {

    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    const cardContentDiv = document.createElement("div");
    cardContentDiv.className = "card-content";

    const cardInfoDiv = document.createElement("div");
    cardInfoDiv.className = "info";

    const cardTitle = document.createElement("h4");
    const titleContent = document.createTextNode(title);
    cardTitle.appendChild(titleContent);

    const cardDescription = document.createElement("p");
    const descriptionContent = document.createTextNode(description);
    cardDescription.appendChild(descriptionContent);

    cardInfoDiv.appendChild(cardTitle);
    cardInfoDiv.appendChild(cardDescription);

    cardContentDiv.appendChild(cardInfoDiv);

    const cardActions = document.createElement("div");
    cardActions.className = "actions";

    const favoriteSVGDiv = document.createElement("div");
    favoriteSVGDiv.className = "svg-wrapper";
    favoriteSVGDiv.innerHTML = favoriteSVGstr;

    const followSVGDiv = document.createElement("div");
    followSVGDiv.className = "svg-wrapper";
    followSVGDiv.innerHTML = followSVGstr;

    const shareSVGDiv = document.createElement("div");
    shareSVGDiv.className = "svg-wrapper";
    shareSVGDiv.innerHTML = shareSVGstr;

    cardActions.appendChild(favoriteSVGDiv);
    cardActions.appendChild(followSVGDiv);
    cardActions.appendChild(shareSVGDiv);

    cardContentDiv.appendChild(cardActions);

    cardDiv.appendChild(cardContentDiv);

    return cardDiv;
} 

function createTrendingUser(tag, quote, imgSrc) {
    const trendingUserDiv = document.createElement("div");
    trendingUserDiv.className = "trending-user";

    const userPicWrapper = document.createElement("div");
    userPicWrapper.className = "user-pic-wrapper";

    const userImage = document.createElement("img");
    userImage.src = imgSrc;

    userPicWrapper.appendChild(userImage);

    const tagQuoteWrapper = document.createElement("div");

    const tagElem = document.createElement("p");
    const tagText =  document.createTextNode(tag);
    tagElem.appendChild(tagText);

    const quoteElem = document.createElement("p");
    const quoteText =  document.createTextNode(quote);
    quoteElem.appendChild(quoteText);

    tagQuoteWrapper.appendChild(tagElem);
    tagQuoteWrapper.appendChild(quoteElem);

    trendingUserDiv.appendChild(userPicWrapper);
    trendingUserDiv.appendChild(tagQuoteWrapper);

    return trendingUserDiv;
}

function createAnnouncementeEntry(title, description) {
    const announcementDiv = document.createElement("div");
    announcementDiv.className = "announcement";

    const titleElem = document.createElement("h5");
    const titleText = document.createTextNode(title);
    titleElem.appendChild(titleText);

    const descriptionElem = document.createElement("p");
    const descriptionText = document.createTextNode(description);
    descriptionElem.appendChild(descriptionText);

    announcementDiv.appendChild(titleElem);
    announcementDiv.appendChild(descriptionElem);

    return announcementDiv;
}