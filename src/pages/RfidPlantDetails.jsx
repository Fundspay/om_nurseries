import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import PageHeaderDate from "@/components/shared/pageHeader/PageHeaderDate";
import Footer from "@/components/shared/Footer";

const RfidPlantDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cardData = location.state;

  const [formData, setFormData] = useState({
    plantType: "",
    wateringCycle: "",
    sunlightCount: "",
    damaged: "",
  });

  if (!cardData) {
    return (
      <>
        <PageHeader>
          <PageHeaderDate />
        </PageHeader>
        <div className="main-content">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5>No RFID data found.</h5>
                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => navigate(-1)}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalPayload = {
      ...cardData,
      ...formData,
    };

    console.log("Final RFID Plant Details:", finalPayload);
    alert("Details submitted successfully! Check console.");
  };

  return (
    <>
      <PageHeader>
        <PageHeaderDate />
      </PageHeader>

      <div className="main-content">
        <div className="row">
          <div className="col-12">
            <div className="card stretch stretch-full">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">RFID Plant Details</h5>
                <button className="btn btn-light" onClick={() => navigate(-1)}>
                  Back
                </button>
              </div>

              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* Auto-filled fields */}
                    <div className="col-md-6">
                      <label className="form-label">RFID ID</label>
                      <input
                        type="text"
                        className="form-control"
                        value={cardData.rfid}
                        readOnly
                      />
                    </div>

                    <div className="col-md-3">
                      <label className="form-label">Date</label>
                      <input
                        type="text"
                        className="form-control"
                        value={cardData.date}
                        readOnly
                      />
                    </div>

                    <div className="col-md-3">
                      <label className="form-label">Time</label>
                      <input
                        type="text"
                        className="form-control"
                        value={cardData.time}
                        readOnly
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Unit</label>
                      <input
                        type="text"
                        className="form-control"
                        value={cardData.unit}
                        readOnly
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Block</label>
                      <input
                        type="text"
                        className="form-control"
                        value={cardData.block}
                        readOnly
                      />
                    </div>

                    {/* Extra Inputs */}
                    <div className="col-md-6">
                      <label className="form-label">Plant Type</label>
                      <select
                        className="form-select"
                        name="plantType"
                        value={formData.plantType}
                        onChange={handleChange}
                      >
                        <option value="">Select Plant Type</option>
                        <option value="Shrub">Shrub</option>
                        <option value="Herb">Herb</option>
                        <option value="Tree">Tree</option>
                        <option value="Climber">Climber</option>
                        <option value="Creeper">Creeper</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Watering Cycle per Week</label>
                      <select
                        className="form-select"
                        name="wateringCycle"
                        value={formData.wateringCycle}
                        onChange={handleChange}
                      >
                        <option value="">Select Watering Cycle</option>
                        <option value="Once">Once</option>
                        <option value="Twice">Twice</option>
                        <option value="Everyday">Everyday</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Sunlight Count</label>
                      <select
                        className="form-select"
                        name="sunlightCount"
                        value={formData.sunlightCount}
                        onChange={handleChange}
                      >
                        <option value="">Select Sunlight Count</option>
                        <option value="Less">Less</option>
                        <option value="More">More</option>
                        <option value="Once a week">Once a week</option>
                        <option value="Once a month">Once a month</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Damaged</label>
                      <select
                        className="form-select"
                        name="damaged"
                        value={formData.damaged}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div className="col-12 mt-3">
                      <button type="submit" className="btn btn-success">
                        Save Details
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RfidPlantDetails;