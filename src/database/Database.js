import { getDatabase, ref, onValue, update, DataSnapshot } from "firebase/database";
import * as firebase from "firebase/app";

const database = getDatabase();

export const getSlidesCount = () => {
  const slidesRef = ref(database, "slides");
  return new Promise((resolve, reject) => {
    onValue(slidesRef, (snapshot) => {
      if (snapshot instanceof DataSnapshot && snapshot.exists()) {
        const count = snapshot.val().count;
        resolve(count);
      } else {
        update(slidesRef, { count: 0 }).then(() => {
          resolve(0);
        }).catch((error) => {
          reject(error);
        });
      }
    }, (error) => {
      reject(error);
    });
  });
};

export const updateSlidesCount = (newCount) => {
  const slidesRef = ref(database, "slides");
  update(slidesRef, { count: newCount });
};