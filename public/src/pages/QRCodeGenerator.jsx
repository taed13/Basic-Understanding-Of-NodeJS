import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAllQrCodes,
  getQrCodeRoute,
  uploadCloudinaryRoute,
} from "../utils/APIRoutes";

export default function QRCodeGenerator() {
  const [textString, setTextString] = useState("");
  const [colorLight, setColorLight] = useState("#ffffff");
  const [colorDark, setColorDark] = useState("#000000");
  const [nameQR, setNameQR] = useState("qrcode");
  const [qrcodes, setQRCodes] = useState([]);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQRCodes = async () => {
      try {
        const response = await axios.get(getAllQrCodes);
        setQRCodes(response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchQRCodes();
  }, [qrcodes]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!textString || !colorLight || !colorDark || !nameQR) {
      toast.warn("Please fill in all fields.", toastOptions);
      return;
    }

    try {
      // Generate the QR code image
      const canvas = document.getElementById("qrCode");
      const pngUrl = canvas.toDataURL("image/png");

      // Create a new FormData instance
      const formData = new FormData();

      // Convert data URL to Blob
      const fetchResponse = await fetch(pngUrl);
      const blob = await fetchResponse.blob();

      // Append the Blob to the FormData instance
      formData.append("file", blob, `${nameQR}.png`);

      // Send the FormData instance to your server-side endpoint
      const uploadResponse = await axios.post(uploadCloudinaryRoute, formData);

      // Log the response from the server
      // console.log(uploadResponse.data);

      // Save the QR code data in MongoDB
      const response = await axios.post(getQrCodeRoute, {
        name: nameQR,
        text: textString,
        colorDark: colorDark,
        colorLight: colorLight,
        imageUrl: uploadResponse.data.secure_url, // Assuming the server returns the image URL
      });

      // console.log(response.data);
      toast.success("QR Code saved successfully!", toastOptions);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById("qrCode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log("pngUrl", pngUrl);
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${nameQR}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <form className="md:container md:mx-auto mt-5" onSubmit={handleSubmit}>
        <button onClick={() => navigate(-1)} className="mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-gray-800">
          Live demo (ReactJS-NodeJS-MongoDB)
        </h2>
        <p>
          You can generate QR Code symbols conveniently on this web page,
          powered by the JavaScript library
        </p>

        <div className="flex">
          <div className="flex flex-col w-8/12">
            <div className="grid grid-cols-12 mt-5">
              <label htmlFor="textString" className="col-span-1">
                Name:
              </label>
              <input
                type="text"
                id="textString"
                className="border-2 border-gray-500 rounded-md px-1 col-span-5"
                placeholder="Enter your name to download with name..."
                onChange={(event) => setNameQR(event.target.value)}
              />
            </div>

            <div className="grid grid-cols-12 mt-5">
              <label htmlFor="textString" className="col-span-1">
                Text string:
              </label>
              <textarea
                type="text"
                id="textString"
                className="border-2 border-gray-500 rounded-md h-32 px-1 col-span-5"
                placeholder="Enter your text to be put into the QR Code"
                value={textString}
                onChange={(event) => setTextString(event.target.value)}
              />
            </div>

            <div className="grid grid-cols-12 mt-5">
              <div className="flex flex-col">
                <label htmlFor="qrCode" className="col-span-1">
                  QR Code:
                </label>
                <p
                  className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline cursor-pointer"
                  onClick={downloadQRCode}
                >
                  (download)
                </p>
              </div>
              <QRCode
                id="qrCode"
                className="col-span-5 border-2 border-gray-500 rounded-md h-32 px-1"
                includeMargin={true}
                size={290}
                value={textString}
                fgColor={colorDark}
                bgColor={colorLight}
              />
            </div>

            <div className="grid grid-cols-12 mt-5 items-center">
              <label htmlFor="colors" className="col-span-1">
                Colors:
              </label>

              <div className="flex col-span-5 items-center">
                <label htmlFor="colorDark" className="w-16">
                  Light =
                </label>
                <input
                  type="text"
                  id="colorDark"
                  className="border-2 border-gray-500 rounded-md h-10 px-1 w-1/6"
                  value={colorLight}
                  onChange={(e) => setColorLight(e.target.value)}
                />
                <span className="mx-2">,</span>
                <label htmlFor="colorDark" className="w-16">
                  Dark =
                </label>
                <input
                  type="text"
                  id="colorDark"
                  className="border-2 border-gray-500 rounded-md h-10 px-1 w-1/6"
                  value={colorDark}
                  onChange={(e) => setColorDark(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-5 w-1/2"
            >
              Push into DB
            </button>
          </div>

          <div className="flex flex-col w-4/12 ml-5">
            <ul className="flex gap-1 justify-between">
              <li>image</li>
              <li>name</li>
              <li>text</li>
              <li>color white</li>
              <li>color black</li>
            </ul>
            <ul className="flex flex-col gap-1 justify-between">
              {qrcodes.map((qrcode) => (
                <li key={qrcode._id} className="flex gap-1 justify-between">
                  <Link
                    to={qrcode.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={qrcode.imageUrl}
                      alt={qrcode.name}
                      className="w-12 h-12"
                    />
                  </Link>
                  <p>{qrcode.name}</p>
                  <p>{qrcode.text}</p>
                  <p>{qrcode.colorLight}</p>
                  <p>{qrcode.colorDark}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
