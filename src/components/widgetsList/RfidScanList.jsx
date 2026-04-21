import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { rfidScanData } from "@/utils/fackData/rfidScanData";

const unitOptions = ["Unit 01", "Unit 02", "Unit 03", "Unit 04", "Unit 05"];
const blockOptions = ["Block 01", "Block 02", "Block 03", "Yet to be decided"];

const RfidScanList = () => {
  const navigate = useNavigate();

  const [rfidCards, setRfidCards] = useState(rfidScanData);

  const handleUnitChange = (id, value) => {
    setRfidCards((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, unit: value } : item
      )
    );
  };

  const handleBlockChange = (id, value) => {
    setRfidCards((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, block: value } : item
      )
    );
  };

  const handlePlacedChange = (id) => {
    setRfidCards((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, placed: !item.placed } : item
      )
    );
  };

  const handleAddDetails = (card) => {
    navigate(`/dashboards/gardner/rfid-details/${card.id}`, {
      state: card,
    });
  };

  return (
    <div className="col-12 mt-4">
      <div className="card stretch stretch-full">
        <div className="card-header">
          <h5 className="card-title mb-0">Scanned RFID List (324)</h5>
        </div>

        <div className="card-body">
          <div className="d-flex flex-column gap-3">
            {rfidCards.map((card) => (
              <div
                key={card.id}
                className="card border"
                style={{
                  backgroundColor: card.placed ? "#d1f7d6" : "#ffffff",
                  transition: "0.3s ease",
                }}
              >
                <div className="card-body">
                  <div className="row align-items-center g-3">
                    {/* RFID + Date + Time */}
                    <div className="col-lg-3 col-md-12">
                      <h6 className="mb-1 fw-bold">{card.rfid}</h6>
                      <div className="text-muted fs-12">
                        <div>Time: {card.time}</div>
                        <div>Date: {card.date}</div>
                      </div>
                    </div>

                    {/* Unit Dropdown */}
                    <div className="col-lg-2 col-md-6">
                      <label className="form-label fw-semibold">Choose Unit</label>
                      <select
                        className="form-select"
                        value={card.unit}
                        onChange={(e) =>
                          handleUnitChange(card.id, e.target.value)
                        }
                      >
                        {unitOptions.map((unit) => (
                          <option key={unit} value={unit}>
                            {unit}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Block Dropdown */}
                    <div className="col-lg-2 col-md-6">
                      <label className="form-label fw-semibold">Choose Block</label>
                      <select
                        className="form-select"
                        value={card.block}
                        onChange={(e) =>
                          handleBlockChange(card.id, e.target.value)
                        }
                      >
                        {blockOptions.map((block) => (
                          <option key={block} value={block}>
                            {block}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Tick Box */}
                    <div className="col-lg-2 col-md-6">
                      <label className="form-label fw-semibold d-block">
                        Place Location
                      </label>
                      <div className="form-check mt-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={card.placed}
                          onChange={() => handlePlacedChange(card.id)}
                          id={`placed-${card.id}`}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`placed-${card.id}`}
                        >
                          Mark as placed
                        </label>
                      </div>
                    </div>

                    {/* Add Details Button */}
                    <div className="col-lg-3 col-md-6">
                      <label className="form-label fw-semibold d-block opacity-0">
                        Action
                      </label>
                      <button
                        className="btn btn-primary w-100"
                        onClick={() => handleAddDetails(card)}
                      >
                        Add Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RfidScanList;