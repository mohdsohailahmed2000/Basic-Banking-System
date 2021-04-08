var fetchModel= require('./models/user');
module.exports={
 
    fetchData:function(req, res){
      
      fetchModel.fetchData(function(data){
          res.render('customer',{userData:data});
      })
    }
}