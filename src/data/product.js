const product = [{
    "id": 1,
    "title": "Bob Esponja",
    "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    "price": "$2189.17",
    "stock": 1,
    "genere": "kitImprimible"
  }, 
  {
    "id": 2,
    "title": "Hombre Araña",
    "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    "price": "$330.32",
    "stock": 18,
    "genere": "kitImprimible"
  }, 
  {
    "id": 3,
    "title": "Sirenita",
    "description": "Phasellus in felis.",
    "price": "$4344.40",
    "stock": 13,
    "genere": "candyBar"
  }, 
  {
    "id": 4,
    "title": "Astronautas",
    "description": "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    "price": "$4185.77",
    "stock": 18,
    "genere": "kitImprimible"
  }, 
  {
    "id": 5,
    "title": "Jovenes Titanes",
    "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. ",
    "price": "$1533.82",
    "stock": 6,
    "genere": "kitImprimible"
  }, 
  {
    "id": 6,
    "title": "Animales del bosque",
    "description": "Nulla suscipit ligula in lacus.",
    "price": "$2876.43",
    "stock": 14,
    "genere": "kitImprimible"
  }, 
  {
    "id": 7,
    "title": "Matsoft",
    "description": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. ",
    "price": "$3336.48",
    "stock": 8,
    "genere": "candyBar"
  },
  {
    "id": 8,
    "title": "Otcom",
    "description": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    "price": "$171.71",
    "stock": 9,
    "genere": "kitImprimible"
  }, 
  {
    "id": 9,
    "title": "Rank",
    "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    "price": "$4843.82",
    "stock": 8,
    "genere": "candyBar"
  }, 
  {
    "id": 10,
    "title": "Wrapsafe",
    "description": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    "price": "$2434.23",
    "stock": 8,
    "genere": "candyBar"
  }, 
  {
    "id": 11,
    "title": "Sonsing",
    "description": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    "price": "$4979.09",
    "stock": 19,
    "genere": "candyBar"
  }, 
  {
    "id": 12,
    "title": "Job",
    "description": "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "price": "$2027.58",
    "stock": 2,
    "genere": "candyBar"
  }, 
  {
    "id": 13,
    "title": "Fix San",
    "description": "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    "price": "$4589.07",
    "stock": 20,
    "genere": "kitImprimible"
  }, 
  {
    "id": 14,
    "title": "Konklux",
    "description": "Quisque ut erat. Curabitur gravida nisi at nibh.",
    "price": "$4477.04",
    "stock": 17,
    "genere": "kitImprimible"
  }, 
  {
    "id": 15,
    "title": "Y-Solowarm",
    "description": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    "price": "$235.82",
    "stock": 7,
    "genere": "kitImprimible"
  }, 
  {
    "id": 16,
    "title": "Bytecard",
    "description": "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    "price": "$1109.37",
    "stock": 1,
    "genere": "candyBox"
  }, 
  {
    "id": 17,
    "title": "Lotlux",
    "description": "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    "price": "$2612.60",
    "stock": 14,
    "genere": "candyBar"
  }, 
  {
    "id": 18,
    "title": "Sub-Ex",
    "description": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    "price": "$4951.13",
    "stock": 12,
    "genere": "kitImprimible"
  }, 
  {
    "id": 19,
    "title": "It",
    "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    "price": "$486.55",
    "stock": 19,
    "genere": "kitImprimible"
  }, 
  {
    "id": 20,
    "title": "Otcom",
    "description": "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    "price": "$2836.55",
    "stock": 13,
    "genere": "candyBar"
  },
];

export default product
  
    
