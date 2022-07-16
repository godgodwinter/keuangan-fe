<template>
  <div class="w-full py-4 px-2 flex justify-center">
    <div class="tabs">
      <a class="tab tab-bordered">Pengeluaran</a>
      <a class="tab tab-bordered tab-active">Pemasukan</a>
    </div>
  </div>

  <div class="shadow py-4 px-6 lg:px-10">
    <div class="w-full py-6 flex">
      <div class="lg:grid grid-cols-2 w-full space-y-4 space-x-10">
        <div class="grid grid-cols-4 space-x-4 lg:py-4 lg:px-10">
          <label class="py-3 px-10 lg:px-0">Tanggal</label>
          <div class="col-span-3">
            <input
              type="text"
              placeholder="Pilih Bulan"
              class="input input-bordered w-full"
            />
          </div>
        </div>
        <div class="grid grid-cols-4 space-x-4">
          <div class="flex space-x-2">
            <label class="py-3">Kategori </label>
            <span class="py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div class="col-span-3">
            <input
              type="text"
              placeholder="Pilih Kategori"
              class="input input-bordered w-full"
            />
          </div>
        </div>

        <div class="grid grid-cols-4 space-x-4">
          <label class="py-3">Jumlah</label>
          <div class="col-span-3">
            <input
              type="text"
              placeholder="Nominal"
              class="input input-bordered w-full"
            />
          </div>
        </div>

        <div class="grid grid-cols-4 space-x-4">
          <label class="py-3">Keterangan</label>
          <div class="col-span-3">
            <input
              type="text"
              placeholder="Keterangan"
              class="input input-bordered w-full"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-end">
      <button class="btn btn-primary">Simpan</button>
    </div>
  </div>
</template>
