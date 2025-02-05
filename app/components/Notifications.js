// components/Notifications.js
import { useEffect, useState } from "react";
import { requestForToken, onMessageListener } from "../lib/firebase";

const Notifications = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });

  useEffect(() => {
    requestForToken().then((token) => {
      console.log("Token:", token);
    });

    onMessageListener().then((payload) => {
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
    });
  }, []);

  return (
    <div>
      {notification.title && (
        <div className="notification">
          <h3>{notification.title}</h3>
          <p>{notification.body}</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;
