export default function HomePage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>MyGift4You</h1>

      <p>
        Secure digital gift cards for businesses.
      </p>

      <hr />

      <section style={{ marginTop: "30px" }}>
        <h2>For Businesses</h2>
        <p>
          Issue, manage, and track gift cards for your customers — securely and easily.
        </p>
        <button>Business Login</button>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>For Customers</h2>
        <p>
          Check your gift card balance or redeem sessions.
        </p>
        <button>Check Card</button>
      </section>
    </main>
  );
}
