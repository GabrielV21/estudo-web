
class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "cardLeft");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("tittle");
        linkTitle.href = this.getAttribute("href");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "cardRight");

        const newsImg = document.createElement("img");
        newsImg.src = this.getAttribute("photo") || "assets/dv.png"; 
        newsImg.style = "width: 150px;"
        newsImg.alt = "Icone do darth vader";
        cardRight.appendChild(newsImg);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .container{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            
            .card{
                margin-top: 20px;
                margin-left: auto;
                margin-right: auto;
                border-radius: 15px;
                width: 80%;
                box-shadow: 2px 8px 60px -6px rgba(0,0,0,1);
                -webkit-box-shadow: 2px 8px 60px -6px rgba(0,0,0,1);
                -moz-box-shadow: 2px 8px 60px -6px rgba(0,0,0,1);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            
            .cardLeft{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
            }
            
            .cardLeft span{
                font-weight: 400;
            }
            
            .cardLeft p{
                color: gray;
            }
            
            .cardLeft h1{
                margin-top: 15px;
                font-size: 25px;
            }
        

        `;

        return style;
    }

}

customElements.define("card-news", CardNews);