<dialog id="my_modal_2" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg text-center">Vuoi disconnetterti dall'account?</h3>
      
        <form method="dialog" class="modal-backdrop w-full">
            <div class="flex gap-6 w-full p-3 justify-center">
                <button on:click={() => {window.location.href = "/logout"}} class="btn btn-accent">Disconetti</button>
                <button class="btn">Chiudi</button>
            </div>
        </form>

    </div>
  </dialog>