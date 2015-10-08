<form class="module-status">
    <div class="status-compose">
        <textarea rows="1" disabled="" class="status-text" name="status-text" placeholder="skriv et svar" data-autosize-on="true"></textarea>
    </div>
    <div class="status-login">
        <input type="text" class="status-user" placeholder="Brugernavn" name="status-user">
        <input type="password" class="status-pass" placeholder="Adgangskode" name="status-pass">
    </div>
    
    
    <div class="status-register">
        <input type="text" class="new-user" name="new-user" placeholder="Brugernavn">
        <input type="text" class="new-fname" name="new-fname" placeholder="Fornavn">
        <input type="text" class="new-lname" name="new-lname" placeholder="Efternavn">
        <input type="email" class="new-email" name="new-pass" placeholder="Email">
        <select id="new-year">
            <option value="0" disabled="" selected="">Hvilket Klassetrin går du på?</option>
            <option value="1. G">1. G</option>
            <option value="2. G">2. G</option>
            <option value="3. G">3. G</option>
        </select>
        <input class="new-pass" type="password" placeholder="Kode">
        <input class="new-pass-check" type="password" placeholder="Skriv din kode igen">
    </div>

    <div class="status-buttons">
        <a class="btn-login" class="right">Log ind</a>
        <div class="login-text" class="hidden-right">
            <span></span>
            <a href="http://192.168.1.4/fg/wp-admin/profile.php">Rediger profil</a>
            <a class="status-logout" href="#">Log ud</a>
        </div>
        <a class="btn-register" class="hidden-left">Registrer</a>
        <a class="btn-send" class="hidden-right">Send</a>
    </div>
</form>