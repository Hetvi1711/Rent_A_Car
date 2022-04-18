const bookingdetails = new mongoose.Schema({
    booking_id : {
        type : Number,
        unique : true,
        required : [true, "Booking Id must be provided."],
    },

    booking_date : {
        type : Date,
        validate : function(input) {
            new Date(input) == 'date' && new Date(input) <= new Date();
            return;
        },
        required : [true, "Booking date must be provided."],
    },

    return_date : {
        type : Date,
        required : [true, "Return date must be provided."],
    },

    pickup_location : {
        type : String,
        required : [true, "Pickup location must be provided."],
    },

    drop_location : {
        type : String,
        required : [true, "Drop location must be provided."],
    },
})