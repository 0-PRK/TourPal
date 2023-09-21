const Plan = require('../models/planModel');


// module.exports.getAllPlans=async function getAllPlans(req,res){
//     try{
//     let plans=await Plan.find();
//         if(plans){
//             return res.json({
//                 message: 'all plans retrieved',
//                 data:plans
//             })
//         }
//         else{
//             return res. json({
//                 message: 'plans not found'
//             })
//         }
//     }   
//     catch(err){
//     res.status(500).json({
//         message:err.message
//     });
//     }
// }

module.exports.getPlan=async function getPlan(req,res){
    try{

      let id=req.params.id;
      let plan=await Plan.findById(id);
        if(plan){
            return res.json({
                details: plan,
                message: 'plan retrieved',
            })
        }
        else{
            return res. json({
                message: 'plan not found'
            })
        }
    }   
    catch(err){
      console.log("Error: ",err.message)
    res.status(500).json({

        message:err.message
    });
    }
}


module.exports.getPlanByUserId = async function getPlanByUserId(req, res) {
  const userId = req.params.id; // Assuming the user ID is passed as a parameter

  try {
    const plans = await Plan.find({ user_id: userId });
    const planCount = plans.length; // Calculate the number of plans
    const details = ({

      plans,
      planCount
    })
    res.json({
      details
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports.createPlan=async function createPlan(req,res){
  try{
      let planData=req.body;
      console.log(planData);
      let createPlan=await Plan.create(planData)
      return res.json({
          planId:createPlan.id,
          message: 'plan created Succesfully',
          data:createPlan
      })
  }
  catch (err) {
      console.log('Error : ', err.message)
  
      return res.status(400).json({
        message: err.message,
      });
  }
}
// module.exports.deleteNote = async function deleteNote(req, res) {
//   try {
//     const planId = req.params.planId;
//     const itineraryId = req.params.itineraryId;
//     const placeItineraryId = req.params.placesItineraryId;
//     const noteId = req.params.noteId;

//     const plan = await Plan.findById(planId);
//     if (!plan) {
//       return res.json({
//         message: 'Plan not found',
//       });
//     }

//     const placeIndex = plan.placestovisit.findIndex(place => place._id.toString() === placeId);
//     if (placeIndex === -1) {
//       return res.json({
//         message: 'Place not found',
//       });
//     }

//     const noteIndex = plan.placestovisit[placeIndex].notes.findIndex(note => note._id.toString() === noteId);
//     if (noteIndex === -1) {
//       return res.json({
//         message: 'Note not found',
//       });
//     }

//     plan.placestovisit[placeIndex].notes.splice(noteIndex, 1);
//     await plan.save();

//     return res.json({
//       message: 'Note deleted successfully',
//       data: plan,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       message: err.message,
//     });
//   }
// };


// module.exports.deletePlace = async function deletePlace(req, res) {
//   try {  
//     const planId = req.params.planId;
//     const placeId = req.params.placeId;

//     const plan = await Plan.findById(planId);
//     if (!plan) {
//       return res.json({
//         message: 'Plan not found',
//       });
//     }

//     const placeIndex = plan.placestovisit.findIndex(place => place._id.toString() === placeId);
//     if (placeIndex === -1) {
//       return res.json({
//         message: 'Place not found',
//       });
//     }

//     plan.placestovisit.splice(placeIndex, 1);
//     await plan.save();

//     return res.json({
//       message: 'Place deleted successfully',
//       data: plan,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       message: err.message,
//     });
//   }
// };


module.exports.deletePlan=async function deletePlan(req,res){
    try{
        let id=req.params.id;
        let deletePlan=await Plan.findByIdAndDelete(id)
        return res.json({
            message: 'plan deleted Succesfully',
            data:deletePlan
        })
    }
    catch{
        res.status(500).json({
            message: err.message,
            })
    }
}


module.exports.deleteDayNote = async function(req, res) {
  try {
    const planId = req.params.planId;
    const itineraryId = req.params.itineraryId;
    const dayNoteId = req.params.dayNoteId;

    const plan = await Plan.findById(planId);
    if (!plan) {
      return res.json({
        message: 'Plan not found',
      });
    }

    const itineraryIndex = plan.Itinerary.findIndex((item) => item._id.toString() === itineraryId);
    if (itineraryIndex === -1) {
      return res.json({
        message: 'Itinerary not found',
      });
    }

    const dayNoteIndex = plan.Itinerary[itineraryIndex].daynotes.findIndex(
      (item) => item._id.toString() === dayNoteId
    );
    if (dayNoteIndex === -1) {
      return res.json({
        message: 'Day note not found',
      });
    }

    plan.Itinerary[itineraryIndex].daynotes.splice(dayNoteIndex, 1);
    await plan.save();

    return res.json({
      message: 'Day note deleted successfully',
      data: plan,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};


module.exports.deletePlacesItinerary = async function(req, res) {
  try {
    const planId = req.params.planId;
    const itineraryId = req.params.itineraryId;
    const placeItineraryId = req.params.placesItineraryId;

    const plan = await Plan.findById(planId);
    if (!plan) {
      return res.json({
        message: 'Plan not found',
      });
    }

    const itineraryIndex = plan.Itinerary.findIndex((item) => item._id.toString() === itineraryId);
    if (itineraryIndex === -1) {
      return res.json({
        message: 'Itinerary not found',
      });
    }

    const placeItineraryIndex = plan.Itinerary[itineraryIndex].placesitinerary.findIndex(
      (item) => item._id.toString() === placeItineraryId
    );
    if (placeItineraryIndex === -1) {
      return res.json({
        message: 'Place itinerary not found',
      });
    }

    plan.Itinerary[itineraryIndex].placesitinerary.splice(placeItineraryIndex, 1);
    await plan.save();

    return res.json({
      message: 'Place itinerary deleted successfully',
      data: plan,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports.deleteNoteInPlacesItinerary = async function(req, res) {
  try {
    const planId = req.params.planId;
    const itineraryId = req.params.itineraryId;
    const placeItineraryId = req.params.placesItineraryId;
    const noteId = req.params.noteId;

    const plan = await Plan.findById(planId);
    if (!plan) {
      return res.json({
        message: 'Plan not found',
      });
    }

    const itineraryIndex = plan.Itinerary.findIndex((item) => item._id.toString() === itineraryId);
    if (itineraryIndex === -1) {
      return res.json({
        message: 'Itinerary not found',
      });
    }

    const placeItineraryIndex = plan.Itinerary[itineraryIndex].placesitinerary.findIndex(
      (item) => item._id.toString() === placeItineraryId
    );
    if (placeItineraryIndex === -1) {
      return res.json({
        message: 'Place itinerary not found',
      });
    }

    const noteIndex = plan.Itinerary[itineraryIndex].placesitinerary[placeItineraryIndex].notes.findIndex(
      (item) => item._id.toString() === noteId
    );
    if (noteIndex === -1) {
      return res.json({
        message: 'Note not found',
      });
    }

    plan.Itinerary[itineraryIndex].placesitinerary[placeItineraryIndex].notes.splice(noteIndex, 1);
    await plan.save();

    return res.json({
      message: 'Note deleted successfully',
      data: plan,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};


module.exports.updatePlan = async function(req, res) {
  try {
    const planId = req.params.id;
    const dataToBeUpdated = req.body;

    const plan = await Plan.findById(planId);
    if (!plan) {
      return res.json({
        message: 'Plan not found',
      });
    }

    for (let key in dataToBeUpdated) {
      plan[key] = dataToBeUpdated[key];
    }

    await plan.save();

    return res.json({
      message: 'Plan updated successfully',
      data: plan,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

//top plans
// module. exports. topPlans=async function topPlans(req,res){
//         try{
//             const plans=await Plan.find().sort({
//                 ratingsAverage:-1
//             }).limit(3);
//             return res.json({
//                 message: 'top3 plans',
//                 data:plans
//             })
//         }
//         catch(err){
//             res. status (500).json({
//                 message: err.message,
//             })
//         }
//     }
   

