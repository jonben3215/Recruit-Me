const server = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { options } = require("superagent");
const { request } = require("chai");
const { isTypedArray } = require("util/types");
chai.should();
chai.use(chaiHttp);
const { assert, expect } = chai;

describe("Server!", () => {
    it("should add a new user to the db array", (done) => {
        const newObj = {
            id: Date.now().toString(),
            name: "Brittany B",
            email: "bb@outlook.com",
            password: "password1"
        }; 
       chai 
        .request(server)
        .post('/views/signup.ejs')
        .send(newObj)
        .end((err, res) => {
            expect(res).to.have.status(200); 
            res.body.should.have.property('id').eq(Date.now().toString());
            res.body.should.have.property('name').eq('Brittany B');
            res.body.should.have.property('email').eq('bb@outlook.com'); 
            done(); 
        });
    });

    it('should log out and redirect correctly', (done) => {
        chai 
        .request(server)
        .get('/logout.ejs')
        .end((err, res) => {
            expect(res).to.have.status(200); 
            expect(res.render.calledOnce).to.be.true; 
            done(); 
        });
    });

    it('should present correct about page', (done) => {
        chai 
        .request(server)
        .get('/about.ejs')
        .end((err, res) => {
            expect(res).to.have.status(200); 
            expect(res.render.calledOnce).to.be.true; 
            done(); 
        });
    });

    it('should render the correct inbox', (done) => {
        chai 
        .request(server)
        .get('/inbox.ejs')
        .end((err, res) => {
            expect(res).to.have.status(200); 
            expect(res.render.calledOnce).to.be.true; 
            done(); 
        });
    });

    it('should render the correct contact page', (done) => {
        chai 
        .request(server)
        .get('/contact.ejs')
        .end((err, res) => {
            expect(res).to.have.status(200); 
            expect(res.render.calledOnce).to.be.true; 
            done(); 
        });
    });

    it('should render the home page', (done) => {
        chai 
        .request(server)
        .get('/Home.ejs')
        .end((err, res) => {
            expect(res).to.have.status(200); 
            expect(res.render.calledOnce).to.be.true; 
            done(); 
        });
    });
});