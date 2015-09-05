<script type="text/html" id="sample_template">
	{{#Books}}
		<div class='columns'>
			<div class='cell-wrapper'>
				<div class='ribbon'>{{isbn}}</div>
				<div class='img'><img src='{{Image}}'/></div>
				<div class='detail'>
					<div class='short-detail'>
					<div class='title'>{{Title}}</div>
					<div class='author'>by Author</div>
				</div>
				<div class='description'>{{Description}}...</div>
			</div>
			<div class='link'><a href='#'>Learn More -></a></div>
			</div>
		</div>
	{{/Books}}
	<div class="clear"></div>
</script>