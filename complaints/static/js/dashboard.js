document.addEventListener("DOMContentLoaded", () => {
  // Handle status filter change
  const statusFilter = document.getElementById("status")
  if (statusFilter) {
    statusFilter.addEventListener("change", function () {
      this.form.submit()
    })
  }

  // Handle search form submission
  const searchForm = document.querySelector(".filter-form")
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      const searchInput = document.getElementById("search")
      if (searchInput && searchInput.value.trim() === "") {
        e.preventDefault()
        searchInput.focus()
      }
    })
  }

  // Add row highlighting on table hover
  const tableRows = document.querySelectorAll(".complaints-table tbody tr")
  tableRows.forEach((row) => {
    row.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#f0f4f8"
    })

    row.addEventListener("mouseleave", function () {
      this.style.backgroundColor = ""
    })
  })
})
