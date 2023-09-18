<form action="/tickets/create" method="post">
	<div class="input-group mb-3">
		<label class="input-group-text" for="hours">Hours</label>
		<input type="text" class="form-control" placeholder="Hours worked" id="hours" />
	</div>
	<div class="input-group mb-3">
		<label class="input-group-text" for="select">Type</label>
		<select class="form-select" id="select">
			<option selected>...</option>
			<option value="1">Early Start</option>
			<option value="2">After Hours</option>
			<option value="3">Weekend</option>
			<option value="4">Public Holiday</option>
		</select>
	</div>
	<div class="input-group mb-3">
		<label class="input-group-text" for="date">Date</label>
		<input type="text" class="form-control" placeholder="Date of overtime" id="date" />
	</div>
	<button class="btn btn-primary" type="submit">Create</button>
</form>
