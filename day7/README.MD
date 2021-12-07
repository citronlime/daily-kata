1. This kata is about placing cards with a grid layout.
2. When another card is added it automatically fits in the design because the grid-template-columns is set to grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
3. For some reason in chrome each card get a hight of the screen height and not the content so I had to add grid-template-rows: repeat(
   5,
   min-content
   ); The min-content makes each card be as high as the card content. The 5 I just set beacuse I thought maybe there will be not more than 5 rows. These properties are set on the container div
4. There is also a gradient background and the cards also have a gradient.
5. Each card also has a drop shadow
