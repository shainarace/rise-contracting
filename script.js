document.getElementById("estimate-form")?.addEventListener("submit", function (event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Estimate request from " + form.get("name"));
  const body = encodeURIComponent(
    "Name: " + form.get("name") +
    "\nPhone: " + form.get("phone") +
    "\nEmail: " + form.get("email") +
    "\nProject type: " + form.get("project") +
    "\nPreferred estimate date/time: " + form.get("date") + " " + form.get("time") +
    "\n\nProject details:\n" + form.get("details")
  );
  window.location.href = "mailto:don@risecontractingnc.com?subject=" + subject + "&body=" + body;
});
