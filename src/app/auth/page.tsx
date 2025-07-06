"use client";

import { useState } from "react";
import styles from "./Auth.module.scss";
import { useRouter } from "next/navigation";
import AuthButton from "@/components/Auth/Button";

export default function AuthPage() {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const validatePhone = (phone: string) => {
        const iranPhoneRegex = /^(\+98|0)?9\d{9}$/;
        return iranPhoneRegex.test(phone);
    };

    const handleLogin = async () => {
        if (!validatePhone(phone)) {
            // میشد از "Yup" برای ولیدیشن هم استفاده کرد ولی چون فقط 1  فیلد بود استفاده نکردم
            setError("شماره تلفن معتبر نیست");
            return;
        }
        setError("");

        try {
            const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
            const data = await res.json();
            const user = data?.results?.[0];

            localStorage.setItem("user", JSON.stringify({ name: user.name.first }));

            router.push("/dashboard");
        } catch {
            setError("خطا در دریافت اطلاعات کاربر");
        }
    };

    return (
        <div className={styles.container}>
            <h1>ورود</h1>
            <input
                type="number"
                placeholder="شماره موبایل"
                value={phone}
                maxLength={11}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.formInput}
            />
            <AuthButton onClick={handleLogin}>ورود</AuthButton>
            {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
    );
}
