export default function FormContacto() {
    return (
        <form>

            <label for="fname">Nombre y apellido</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

            <label for="lname">Email</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

            <label for="country">Country</label>
            <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
            </select>

            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

            <input type="submit" value="Submit" />

        </form>
    )
}