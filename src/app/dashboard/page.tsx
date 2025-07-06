"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Dashboard.module.scss";

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/auth");
    } else {
      const user = JSON.parse(userData);
      setUserName(user.name);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/auth");
  };

  if (!userName) return null;

  return (
    <div className={styles.container}>
      <h1>خوش اومدی، {userName}!</h1>
      <button onClick={handleLogout} className={styles.logoutButton}>
        خروج
      </button>
    </div>
  );
}
