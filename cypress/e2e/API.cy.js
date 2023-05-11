describe("Блок апі тестів", () => {
    const request = {
        method: 'POST',
        url: 'https://www.adoptapet.com/public/apis/pet_list.html',
        
        headers: {
            "myHeaders": "Title"
          },
      };
    it("First test", () => {
        cy.request(request).then(response => {
            assert.isTrue(response.duration <= 1000);
            assert.equal("Title", response.requestHeaders.myHeaders);
            
        })
    })
})

const request1 = {
    method: 'POST',
    url: 'https://www.adoptapet.com/public/apis/pet_list.html',
};
it("Third test", () => {
    cy.request(request1).then(response => {
        assert.isTrue(response.duration <= 1000);
        assert.exists(response.body);
    })
}) 
const queryParams = {
    category: "dogs",
    age: Math.floor(Math.random() * 10) + 1
  };
const request2 ={
    method: 'GET',
    qs: queryParams,
    url: 'https://www.adoptapet.com/public/apis/pet_list.html',
    failOnStatusCode: false
};
it("Fourth test", () => {
    cy.request(request2).then(response => {
assert.isTrue(response.duration <= 1000);
assert.notStrictEqual(500, response.status);
assert.exists(response.body);
    })
})  

const request3 = {
    method: 'POST',
    url: 'https://www.adoptapet.com/public/apis/pet_list.html',
  };

  it("Fifth test", () => {
    cy.request(request3).then(response => {
      assert.isTrue(response.duration <= 1000);
      assert.exists(response.body);
    });
  });

  const queryParams1 = {
    category: "dogs",
    age: Math.floor(Math.random() * 10) + 1
  };

  const request4 = {
    method: 'GET',
    qs: queryParams,
    url: 'https://www.adoptapet.com/public/apis/pet_list.html',
  };

  it("Sixth test", () => {
    cy.request(request4).then(response => {
      assert.isTrue(response.duration <= 1000);
      assert.exists(response.body);
    });
  }); 

  const headers = {
    "Authorization": "Bearer abc123",
    "X-Custom-Header": "customValue"
  };

  const request7 = {
    method: 'GET',
    url: 'https://www.adoptapet.com/public/apis/pet_list.html',
    headers: headers,
  };

  it("Nineth test", () => {
    cy.request(request7).then(response => {
      assert.isTrue(response.duration <= 1000);
      assert.exists(response.body);
    });
  });

  const requestBody = {
    name: "New Pet",
    age: 2,
    category: "dogs"
  };

  const request8 = {
    method: 'POST',
    url: 'https://www.adoptapet.com/public/apis/pet_list.html',
    body: requestBody,
    failOnStatusCode: false
  };

  it("Tenth test", () => {
    cy.request(request8).then(response => {
        assert.isTrue(response.duration <= 1000);
        assert.equal(200, response.status);
      assert.notStrictEqual(requestBody, response.body.data);
    });
  }); 






  
    

    
    
    
    
    
    
    
    
    
    // cy.request(request.url).then(response =>{
    // assert.isTrue(response.duration <= 1000);
    // assert.notStrictEqual(bodyData, response.body.data)

 
